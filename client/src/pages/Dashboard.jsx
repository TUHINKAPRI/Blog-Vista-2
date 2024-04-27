import AuthLayout from "@/Layout/AuthLayout";
import MainLayout from "@/Layout/MainLayout";
import NavBar from "@/components/Header/NavBar";
import Sidebar from "@/components/dashboard/Sidebar";
import SmallSidebar from "@/components/dashboard/SmallSidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="">
      <div className=" mx-4  ">
        <NavBar />
      </div>
      <div className="flex gap-8 bg-white ">
        <div className="h-screen mt-3 ms-3  bg-white">
          <Sidebar />
        </div>
        <div className="mt-3 w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// function Dashboard() {
//   return (
//     <div className="flex flex-col  md:gap-3 ">
//     <NavBar/>
//       <div className="  hidden  md:w-[340px] md:flex   max-h-screen bg-white   ">
//         <Sidebar />
//       </div>
//       <div className="   flex    md:hidden   max-h-screen bg-white ">
//         <SmallSidebar />
//       </div>

//       <div className="w-full overflow-scroll p-2 sm:p-5 h-screen  ">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
