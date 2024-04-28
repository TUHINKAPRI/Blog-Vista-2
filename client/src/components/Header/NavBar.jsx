import { navLink } from "@/constants/navlink";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Avatar,
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

function NavBar() {
  const { user } = useSelector((state) => state.profile);
  const dispatch=useDispatch()
  return (
    

    <Navbar fluid rounded className="bg-[#F9FCFF]   !px-0 ">
      <NavbarBrand href='/'>
        <div>
          <h2 className="text-darkblue  text-[28px] font-bold ">Blog Vista</h2>
        </div>
        {/* <div className="block md:hidden w-[24px] h-[24px] ">
          <img src="/ic_Menu.png" alt="menu" className="w-[24px] h-[24px]" />
        </div> */}
      </NavbarBrand>

      <div className="flex md:order-2">
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
              <NavbarToggle ></NavbarToggle>
          
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
