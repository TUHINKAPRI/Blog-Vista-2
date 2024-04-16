import SearchBox from "../Search/Search";

function Hero() {
  const tags = ["Coding", "Bussiness", "soft Skills"];
  return (
    <div className=" grid grid-cols-1   md:grid-cols-2 gap-[31px] ">
      <div className="col-span-1 w-full sm:w-[535px] md:w-full items-center md:items-start   flex flex-col mx-auto  text-darkblue ">
        <h1 className=" text-[31px] sm:text-[48px] md:text-[50px] font-bold mb-[20px] text-center md:text-start ">
          Read the most interesting articles
        </h1>
        <p className="text-[20px] mb-[28px] font-normal  text-center md:text-start ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div>
          <SearchBox />
        </div>
        <div className="flex sm:flex-row flex-col mt-4 gap-2  sm:items-center">
          <p className="italic  font-bold text-[#5A7184]  me-4 ">
            {" "}
            Popular Tags :
          </p>

          <div className="flex gap-[12px] flex-wrap  ">
            {tags?.map((ele, index) => (
              <div
                className="bg-lightblue bg-opacity-10   rounded-[4px] "
                key={index}
              >
                <p className="py-[6px] px-[19px] italic font-bold  text-[14px] text-[#1565D8] ">
                  {ele}
                </p>
              </div>
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
