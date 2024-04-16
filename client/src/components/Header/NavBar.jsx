import { navLink } from "@/constants/navlink";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className=" flex justify-between items-center  max-w-80 sm:max-w-2xl md:max-w-6xl h-16 md:h-[100px] mx-auto">
      <div>
        <h2 className="text-darkblue  text-[28px] font-bold ">Blog Vista</h2>
      </div>
      <div className="block md:hidden w-[24px] h-[24px] ">
        <img src="/ic_Menu.png" alt="menu" className="w-[24px] h-[24px]" />
      </div>
      <div className="  hidden md:flex   items-center gap-[38px] ">
        <div className="flex flex-row items-start justify-start gap-[43.6px] ">
          {navLink.map((ele, index) => (
            <Link to={`${ele?.path}`} key={index}>
              <div className=" flex flex-col items-start justify-start  box-border">
                <div className="self-stretch relative font-semibold inline-block min-w-[47px] z-[1]">
                  {ele?.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <Link to="/sign-in">
            <div className="py-3 px-9 border-2 border-lightblue text-lightblue font-semibold rounded-full ">
              Sign-in
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
