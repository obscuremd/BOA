import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.png';
import logo2 from '../assets/original.svg';
import { useMediaQuery } from "react-responsive";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#about-us" className="flex items-center hover:text-blue-500 transition-colors">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#our-services" className="flex items-center hover:text-blue-500 transition-colors">
          Our Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#benefits" className="flex items-center hover:text-blue-500 transition-colors">
          Benefits
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#get-started" className="flex items-center hover:text-blue-500 transition-colors">
          Get Started
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 960 });
  return (
    <Navbar className="sticky top-0 z-50 mx-auto px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-2 items-center">
          {isMobile && <img src={logo2} alt="" className="w-32 " />}
          {!isMobile &&
            <>
              <img src={logo} alt="" className="w-20 " />
              <Typography
                as="a"
                href="#"
                variant="h2"
                className="mr-4 cursor-pointer py-1.5"
              >
                EagleCounty Bank
              </Typography>
            </>}
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}