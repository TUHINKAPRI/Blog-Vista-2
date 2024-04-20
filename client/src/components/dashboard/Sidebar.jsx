
import { LayoutDashboard } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Gauge } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Sidebar() {
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
    <div className=" w-full  ">
      <div className="max-w-52 mx-auto">
        <div
          className="mt-[46px] flex gap-3  items-center cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/leftarrow.png" alt="" className="w-7 h-7  " />
          <h2 className="text-darkblue  text-[28px] font-bold ">Blog Vista</h2>
        </div>
        <div>
          <p
            className="mt-[50px] mb-[33px] break-words font-bold  tracking-[1px]
 text-[#C7C7C7]  "
          >
            MAIN MENU
          </p>
          <div className="flex flex-col gap-2 ">
            {manu?.map((ele, index) => (
              <Link
                to={`${ele.path}`}
                className="flex gap-[20px] group ps-2  py-3 rounded-md"
                key={index}
              >
                <ele.icon
                  className={`${
                    location.pathname.includes(ele.path)
                      ? "text-lightblue"
                      : "text-[var(--grey-01,#A5A5A5)]"
                  }    w-6 h-6   group-hover:text-lightblue group-hover:animate-bounce `}
                />
                <p
                  className={` ${
                    location.pathname.includes(ele.path)
                      ? "text-lightblue"
                      : "text-[var(--grey-01,#A5A5A5)]"
                  }  group-hover:text-lightblue font-semibold text-[18px] `}
                >
                  {ele.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
