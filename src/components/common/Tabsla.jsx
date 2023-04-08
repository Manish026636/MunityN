import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
  const tabs = [
    { id: 1, label: 'Tab 1', path: '/tab1' },
    { id: 2, label: 'Tab 2', path: '/tab2' },
    { id: 3, label: 'Tab 3', path: '/tab3' }
  ];

  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const tab = tabs.find(tab => tab.path === location.pathname);
    setCurrentTab(tab ? tab.id : null);
  }, [location, tabs]);

  return (
    <div className="flex justify-center items-center mt-5">
      {tabs.map(tab => (
        <Link
          key={tab.id}
          to={tab.path}
          className={`py-3 px-6 text-sm font-medium text-gray-700 border-b-2 ${
            currentTab === tab.id ? 'border-indigo-500' : 'border-gray-200'
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;