import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography as="a" href="/" variant="h6">
          Courses List
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <Link to="/new-course">
            <Button color="blue-gray">New Course</Button>
          </Link>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
};
export default MyNavbar;
