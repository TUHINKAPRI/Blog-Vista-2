import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import SmallLoading from "../Loading/SmallLoading";

function SearchBox({ size,serchSubmitHandler,isLoading }) {
  const[formData,setFormData]=useState()
  return (
    <div
      className={`flex  gap-2 p-2  rounded-lg bg-white h-[56] items-center  ${
        size ? size : " max-w-80   sm:w-[473px]  md:max-w-96 "
      }`}
    >
      <Search className=" top-3 left-2 " size={25} />
      <Input
      onChange={(e)=>{setFormData(e.target.value)}}
        className="border-none  !ring-0 !focus:ring-0 border-white  "
        placeholder="Search here ..."
      />
      <button onClick={()=>{serchSubmitHandler(formData)}} className="bg-lightblue text-white py-2 px-5 flex gap-2 rounded-md font-bold text-[16px] ">
      {
        isLoading?(<SmallLoading  />):(<>
         
        </>)
       
      }
      <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBox;
