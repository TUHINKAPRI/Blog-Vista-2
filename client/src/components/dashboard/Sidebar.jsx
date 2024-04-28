import { LayoutDashboard } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Gauge } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

function Sidebars() {
  const location = useLocation();
  const navigate = useNavigate();
  const manu = [
    {
      name: "Dashboard",
      icon: Gauge,
      path: "/dashboard/user",
    },
    {
      name: "Profile",
      icon: CircleUserRound,
      path: "/dashboard/my-profile",
    },
    {
      name: "My Blogs",
      icon: LayoutDashboard,
      path: "/dashboard/my-blog",
    },
    {
      name:"Bookmarks",
      icon:FaRegBookmark,
      path: "/dashboard/bookmarks",

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
   

    <Sidebar
      aria-label="Sidebar with content separator example"
      className="bg-darkwhite rounded-md "
    >
      <Sidebar.Items className="text-darkblue">
        <Sidebar.ItemGroup>
          <div className="flex flex-col gap-5 ">
            {manu?.map((ele, index) => (
              <Link
                to={`${ele.path}`}
                className={` ${location.pathname.includes(ele.path)?("bg-blue-100"):("")}  flex hover:bg-blue-100 hover:text-lightblue gap-[20px] group ps-3  py-2 rounded-md`}
                key={index}
              >
                <ele.icon
                  className={`${
                    location.pathname.includes(ele.path)
                      ? ""
                      : ""
                  }    w-5 h-5  group-hover:animate-bounce `}
                />
                <p
                  className={` ${
                    location.pathname.includes(ele.path)
                      ? ""
                      : ""
                  }   font-semibold   `}
                >
                  {ele.name}
                </p>
              </Link>
            ))}
          </div>

          <Sidebar.Item href="#" icon={HiArrowSmRight}  className="hover:bg-blue-100" >
            Log-out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Sidebars;
