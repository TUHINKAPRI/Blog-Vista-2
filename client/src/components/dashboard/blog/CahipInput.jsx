import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";
function CahipInput({setValue}) {
  const [chip, setChip] = useState([]);
  const chipControllers = (e) => {
    if (e.key === "Enter") {
      const chipInput = e.target.value.trim();

      if (chip?.includes(chipInput)) {
        toast.error("enter a diff name");
      }
      if (chipInput && !chip?.includes(chipInput)) {
        setChip((prev) => [...prev, chipInput]);

        e.target.value = "";
      }
    }
  };
  const deleteHandler = (indexx) => {
    const chips = chip.filter((ele, index) => {
      if (index !== indexx) {
        return ele;
      }
    });

    setChip([...chips]);
  };

  useEffect(()=>{
    setValue('tags',chip)
  },[chip])

  return (
    <div>
      <div>
        <div className="flex gap-2 mb-2 flex-wrap max-w-3xl ">
          {chip.map((ele, index) => (
            <Badge
              variant="outline"
              key={index}
              className="text-white bg-lightblue px-3 py-1 "
            >
              <span>{ele}</span>{" "}
              <span className="ms-2 cursor-pointer  ">
                <X
                  onClick={() => {
                    deleteHandler(index);
                  }}
                  size={15}
                />
              </span>
            </Badge>
          ))}
        </div>
        <input
          className="appearance-none   border-gray block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="Enter tags Here"
          onKeyDown={(data) => {
            chipControllers(data);
          }}
        />
      </div>
    </div>
  );
}

export default CahipInput;
