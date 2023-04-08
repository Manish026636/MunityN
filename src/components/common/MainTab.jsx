import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainTab = () => {
  const [activeButton, setActiveButton] = useState('GSL');

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='container mx-auto flex justify-center mt-2 md:mt-4'>
      <div className='bg-gradient-to-r from-cyan-200 to-indigo-100 grid grid-cols-3 md:grid-cols-3 gap-4 container mx-3 justify-center mt-12 h-16 rounded-2xl w-full md:w-1/2'>
        <div class='flex items-center justify-center m-2'>
          <Link to='/CPLogin'>
            <button
              className={`${
                activeButton === 'GSL'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-500'
              } hover:bg-blue-700 font-bold py-2 px-4 rounded-xl w-20 md:w-40`}
              onClick={() => handleClick('GSL')}
            >
              GSL
            </button>
          </Link>
        </div>
        <div class='flex items-center justify-center'>
        <button
              className={`${
                activeButton === 'MD'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-500'
              } hover:bg-blue-700 font-bold py-2 px-4 rounded-xl w-20 md:w-40`}
              onClick={() => handleClick('MD')}
            >
              MD
            </button>
        </div>
        <div class='flex items-center justify-center m-2'>
        <button
              className={`${
                activeButton === 'UNMD'
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-gray-500'
              } hover:bg-blue-700 font-bold py-2 px-4 rounded-xl w-20 md:w-40`}
              onClick={() => handleClick('UNMD')}
            >
            UNMD
            </button>
        </div>
      </div>
    </div>
  );
};

export default MainTab;
