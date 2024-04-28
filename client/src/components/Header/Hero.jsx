import { useNavigate } from "react-router-dom";
import SearchBox from "../Search/Search";
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "@/services/operations/ctegoryOperation";

function Hero() {
  const navigate = useNavigate();
  const serchSubmitHandler = (data) => {
    navigate(`/blogs?search=${data}`);
  };
  const categoryHandler = (category) => {
    navigate(`/blogs?category=${category}`);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: getAllCategory,
  });

  console.log(data);

  return (
    <div className=" grid grid-cols-1 md:mb-5  mt-8  md:grid-cols-2 gap-[31px] ">
      <div className="col-span-1 w-full sm:w-[535px] md:w-full items-center md:items-start   flex flex-col mx-auto  text-darkblue ">
        <h1 className=" text-[31px] sm:text-[48px] md:text-[50px] font-bold mb-[20px] text-center md:text-start ">
          Read the most interesting articles
        </h1>
        <p className="text-[20px] mb-[28px] font-normal  text-center md:text-start ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div>
          <SearchBox serchSubmitHandler={serchSubmitHandler} />
        </div>
        <div className="flex sm:flex-row flex-col mt-4 gap-2  sm:items-center">
          <p className="italic  font-bold text-[#5A7184]  me-4 ">
            {" "}
            Popular Tags :
          </p>

          <div className="flex gap-[12px] flex-wrap  ">
            {data?.data
              ?.slice(0, 3)
              .reverse()
              .map((ele, index) => (
                <button
                  className="bg-lightblue bg-opacity-10   rounded-[4px] "
                  key={index}
                  onClick={() => categoryHandler(ele?._id)}
                >
                  <p className="py-[6px] px-3 sm:px-[19px] italic font-bold  text-[14px] text-[#1565D8] ">
                    {ele?.name}
                  </p>
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className=" hidden md:block ">
        <img src="/liveChat.png" alt="chat" />
      </div>
    </div>
  );
}

export default Hero;
