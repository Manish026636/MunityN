import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Navbar,MobileNav,Typography,Button,IconButton} from "@material-tailwind/react";
const NavHead = () => {
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
            href="/"
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
      </>
  )
}

export default NavHead