import Sidebar from "@/components/dashboard/Sidebar";
import SmallSidebar from "@/components/dashboard/SmallSidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex  md:gap-3 ">
      <div className="  hidden  md:w-[340px] md:flex   max-h-screen bg-white   ">
        <Sidebar />
      </div>
      <div className="   flex    md:hidden   max-h-screen bg-white ">
        <SmallSidebar />
      </div>

      <div className="w-full overflow-scroll p-2 sm:p-5 h-screen  ">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
