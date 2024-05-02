import NavBar from "@/components/Header/NavBar";
import Sidebar from "@/components/dashboard/Sidebar";
import SmallSidebar from "@/components/dashboard/SmallSidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="h-screen bg-white">
      <div className="bg-[#F9FCFF] px-5">
        <NavBar />
      </div>

      <div className="flex gap-8  bg-white ">
        <div className="h-[540px] md:block hidden  mt-3 ms-3  bg-white">
          <Sidebar />
        </div>

        <div className=" mx-3  sm:mx-5 md:mx-0   mt-3 h-[540px] overflow-auto w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


