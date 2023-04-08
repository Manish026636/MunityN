import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Tabe = () => {
  const tabs = [
    { id: 1, label: 'GSL', path: 'tab1' },
    { id: 2, label: 'MD', path: 'tab2' },
    { id: 3, label: 'UNMD', path: 'tab3' },
    { id: 4, label: 'RoCa', path: 'tab4' }
  ];

  const params = useParams();
  const navigate = useNavigate();
  const { tab } = params;
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const tabId = tabs.find(res => res.path === tab);
    if(tab && !tabId) return navigate('/404');
    setActiveTab(tabId ? tabId.id : null);
  }, [tab]);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-3 bg-blue-500 rounded-xl  px-6 text-sm font-bold m-2 text-white border-b-2 ${
              currentTab === tab.id ? 'border-indigo-500' : 'border-gray-200'
            }`}
            onClick={() => navigate(`/dashboard/${tab.path}`)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabe;
