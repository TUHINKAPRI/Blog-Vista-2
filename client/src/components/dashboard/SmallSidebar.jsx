import { IoHomeOutline } from "react-icons/io5";
import { Gauge } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

function SmallSidebar() {
  const location =useLocation()
  const manu = [
    {
      name: "Dashboard",
      icon: Gauge,
      path: "/dashboard/user",
    },
    {
      name: "Profile",
      icon: FaRegCircleUser,
      path: "/dashboard/my-profile",
    },
    {
      name: "My Blogs",
      icon: MdOutlineDashboard,
      path: "/dashboard/my-blog",
    },
    {
      name: "Add Blog",
      icon: MdOutlinePostAdd,
      path: "/dashboard/create-blog",
    },
    {
      name: "Settings",
      icon: IoSettingsOutline,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div>
      <div className="flex flex-col mt-5 gap-4 items-center sm:w-16 pb-4 overflow-auto ">
        <Link
          className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300"
          to="/"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild data="instant-open">
                <Button>
                  <IoHomeOutline size={20}  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        {manu?.map((ele, index) => (
          <Link
            key={index}
            className="flex items-center justify-center flex-shrink-0 w-full h-16 bg-gray-300"
            to={ele?.path}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild data="instant-open">
                  <Button>
                    <ele.icon size={20}  className={`${location.pathname.includes(ele.path)?"text-lightblue":"text-gray"}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{ele?.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SmallSidebar;
