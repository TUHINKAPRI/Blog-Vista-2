import { navLink } from "@/constants/navlink";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { logout } from "@/redux/slices/profileSlice";
import { useState } from "react";
import Sidebars from "../dashboard/Sidebar";
import { RxCross2 } from "react-icons/rx";
function NavBar() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
const path=useLocation();
  return (
    <Navbar fluid rounded className="bg-[#F9FCFF] z-30 sticky top-0 !px-0 ">
      <div className="block md:hidden w-[24px] h-[24px] ">
        <img
          onClick={() => setIsOpen(true)}
          src="/ic_Menu.png"
          alt="menu"
          className="w-[24px] h-[24px]"
        />
        <Drawer
          className="bg-darkwhite w-[300px]"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col  gap-4">
            <div className="flex justify-between items-center  ">
              <h2 className="text-[20px] font-bold text-darkblue ">
                Blog Vista
              </h2>
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <RxCross2 size={20} />
              </div>
            </div>
            <Drawer.Items>
              <div className="flex justify-between"  >
                {navLink.map((ele, index) => (
                  <Link to={`${ele?.path}`} key={index}>
                    <div className=" flex flex-col items-start justify-start  box-border">
                      <div className={` ${path?.pathname===ele?.path?" underline-offset-4 underline decoration-slate-600  ":" underline-none "   }   self-stretch text-[16px] text-darkblue relative font-semibold inline-block min-w-[47px] z-[1]`}>
                        {ele?.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <Sidebars />
            </Drawer.Items>
          </div>
        </Drawer>
      </div>

      <h2 className="text-darkblue  text-[28px] font-bold ">Blog Vista</h2>

      <div className="   flex md:order-2">
        {user ? (
          <>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                className="p-2"
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={user?.profile_picture}
                    rounded
                  />
                }
              >
                <DropdownHeader>Hi.. {user?.name}</DropdownHeader>
                <DropdownItem>
                  <Link to="/dashboard/my-profile" className="font-semibold  ">
                    Dashboard
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/dashboard/bookmarks" className="font-semibold  ">
                    Bookmarks
                  </Link>
                </DropdownItem>

                <DropdownDivider />
                <DropdownItem>
                  <button
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Log-out
                  </button>
                </DropdownItem>
              </Dropdown>
              {/* <NavbarToggle ></NavbarToggle> */}
            </div>
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <div className="py-2 px-5 border-2 border-lightblue text-lightblue font-semibold rounded-xl ">
                Sign-in
              </div>
            </Link>
          </>
        )}
      </div>

      <NavbarCollapse className="">
        {navLink.map((ele, index) => (
          <NavbarLink as={Link} to={`${ele?.path}`} key={index}>
            <div className=" flex flex-col items-start justify-start  box-border">
              <div className="self-stretch text-[16px] text-darkblue relative font-semibold inline-block min-w-[47px] z-[1]">
                {ele?.name}
              </div>
            </div>
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavBar;
