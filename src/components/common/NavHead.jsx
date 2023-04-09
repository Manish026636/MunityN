import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CPDashboard from '../chairperson/CPDashboard';
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  FaCube,
  FaUserCircle,
  FaCode,
  FaChevronDown,
  FaCog,
  FaInbox,
  FaLifeRing,
  FaPowerOff,

  FaBars,
} from "react-icons/fa";
import Gslsec from "./Gslsec";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: FaUserCircle,
  },
  {
    label: "Edit Profile",
    icon: FaCog,
  },
  {
    label: "Inbox",
    icon: FaInbox,
  },
  {
    label: "Help",
    icon: FaLifeRing,
  },
  {
    label: "Sign Out",
    icon: FaPowerOff,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <FaChevronDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}



function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);




  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">

          </Typography>
        </MenuHandler>



      </Menu>


    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: FaUserCircle,
  },
  {
    label: "Blocks",
    icon: FaCube,
  },
  {
    label: "Docs",
    icon: FaCode,
  },
];

function NavList() {

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const NavHead = () => {
  const tabs = [
    { id: 1, label: 'GSL', path: 'Dadd' },
    { id: 2, label: 'MD', path: 'tab2' },
    { id: 3, label: 'UNMD', path: 'tab3' },
    { id: 4, label: 'RoCa', path: 'tab4' }
  ];

  const params = useParams();
  const navigate = useNavigate();
  const { tab } = params;
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const tabId = tabs.find(res => res.path === tab);
    if (tab && !tabId) return navigate('/404');
    setCurrentTab(tabId ? tabId.id : null);
  }, [tab]);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar className="mx-auto max-w-screen-4xl p-2 lg:pl-6">
        <div className="relative mx-auto flex items-center text-blue-gray-900">

          <Link to="/dashboard"><img src="milo2.png" alt="Logo" className=" h-6 w-82  mr-2" /></Link>
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <div className="w-full flex justify-end items-center">
            <ProfileMenu />
            <IconButton
              size="sm"
              color="blue-gray"
              variant="text"
              onClick={toggleIsNavOpen}
              className="mr-2 lg:hidden"
            >
              <FaBars className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList />
        </MobileNav>
      </Navbar>
      <div className="mb-40 bg-gray-100">
        <div className="flex justify-center items-center mt-10">
          <div className="bg-gradient-to-r from-cyan-200 to-indigo-100 rounded-xl p-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`py-3 hover:opacity-90 rounded-xl px-4 md:px-12 text-sm font-bold m-2  text-gray-700 border-b-2${currentTab === tab.id ? 'border-green-500 text-white   bg-blue-300' : 'border-gray-800 bg-white  '
                  }`}
                onClick={() => navigate(`/dashboard/${tab.path}`)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <Gslsec/>
      </div>

      {!tab && <CPDashboard />}

    </>
  )
}

export default NavHead;