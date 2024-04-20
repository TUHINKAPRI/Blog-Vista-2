import { Search } from "lucide-react";
import { Input } from "../ui/input";

function SearchBox() {
  return (
    <div className="flex  gap-2 p-2  rounded-lg bg-white h-[56] items-center max-w-80   sm:w-[473px]  md:max-w-96  ">
      <Search className=" top-3 left-2 " size={25} />
      <Input
        className="border-none !ring-0 focus   "
        placeholder="Search here ..."
      />
      <button className="bg-lightblue text-white py-2 px-5 rounded-md font-bold text-[16px] ">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
