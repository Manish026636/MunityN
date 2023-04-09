import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import CPDashboard from '../chairperson/CPDashboard';

const NavHead = () => {
  const tabs = [
    { id: 1, label: 'GSL', path: 'tab1' },
    { id: 2, label: 'MD', path: 'tab2' },
    { id: 3, label: 'UNMD', path: 'tab3' },
    { id: 4, label: 'RoCa', path: 'tab4' }
  ];

  const params = useParams();
  const navigate = useNavigate();
  const {tab} = params;
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const tabId = tabs.find(res => res.path === tab);
    if(tab && !tabId) return navigate('/404');
    setCurrentTab(tabId ? tabId.id : null);
  }, [tab]);

    const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
        <h1>Profile😎Icon</h1>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
         Name
        </a>
      </Typography>
      
    </ul>
  );
 
  return (
    <>
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className=" cursor-pointer  font-bold"
          >
           <img src="Mu.png" width="80px" alt=""/>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              
              size="md"
              className="hidden bg-[#FF5A82] lg:inline-block"
            >
              <span>Logout</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button  size="md" fullWidth className="bg-[#FF5A82] mb-2">
            <span>Logout</span>
          </Button>
        </MobileNav>
      </Navbar>
      <div className="bg-gray-100">
      <div className="flex justify-center items-center mt-10">
      <div className="bg-gradient-to-r from-cyan-200 to-indigo-100 rounded-xl p-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-3  hover:opacity-90 rounded-xl px-4 md:px-12 text-sm font-bold m-2  text-gray-700 border-b-2${
              currentTab === tab.id ? 'border-green-500 text-white   bg-blue-300' : 'border-gray-800 bg-white'
            }`}
            onClick={() => navigate(`/dashboard/${tab.path}`)}
          >
            {tab.label}
          </button>
        ))}
      </div>
</div>
</div>
   {!tab && <CPDashboard/>}
      
      </>
  )
}

export default NavHead