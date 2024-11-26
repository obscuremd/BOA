import {
  Navbar,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function Header({ setActive }) {
  return (
    <Navbar
      variant="gradient"
      className="mx-auto w-full mt-5 from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Eagle County Bank
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" >
            <Cog6ToothIcon className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" >
            <BellIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">

          <a href="https://boa-main.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              color="light-blue"
              className="md:w-fit w-full"
            >
              Login
            </Button>
          </a>
          <Button
            size="sm"
            className="md:w-fit w-full"
            onClick={() => setActive(1)}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Navbar>
  );
}