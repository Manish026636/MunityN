import React from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const NavHead = () => {

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
      <div className='container mx-auto flex justify-center mt-2 md:mt-4 '>
                <div className='bg-gradient-to-r from-cyan-200 to-indigo-100 grid grid-cols-3 md:grid-cols-3 gap-4 container mx-3  justify-center mt-12 h-16 rounded-2xl w-full md:w-1/2 '>
                    <div class="flex items-center justify-center m-2 ">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">GSL</button>
                    </div><div class="flex items-center justify-center">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">MD</button>
                    </div><div class="flex items-center justify-center m-2">
                        <button class="bg-white hover:bg-blue-700 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-xl w-24 md:w-40">UNMD</button>
                    </div>
                </div>
                
            </div>
      </>
  )
}

export default NavHead