import { useQuery } from "@tanstack/react-query";

import SmallLoading from "../Loading/SmallLoading";
import { getAllCategory } from "@/services/operations/ctegoryOperation";

function Category() {
  const { data, isLoading } = useQuery({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: getAllCategory,
  });
  console.log(data);
  if (isLoading) {
    return <SmallLoading />;
  }
  return (
    <div className="flex "  >
      <h2 className="italic  font-bold text-[#5A7184]  me-4 "  >All Category : </h2>
      <div className="flex gap-3" >
      {data?.data?.map((ele, index) => (
        <button key={index}>
          <div className="bg-lightblue bg-opacity-10   rounded-[4px] ">
            <p className="py-[6px] px-[19px] italic font-bold  text-[14px] text-[#1565D8] ">
              {ele?.name}
            </p>
          </div>
        </button>
      ))}
    </div>
    </div>
  );
}

export default Category;
