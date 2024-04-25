import React from "react";
import moment from "moment";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
function BlogCard({ data }) {
  return (
   
    <Link to={`/blog/${data?._id}`} className=" w-[310px] sm:w-[310px]  md:w-[360px]  !bg-white shadow-xl  rounded-lg">
      <div>
        <img
          src={data?.thumbnail}
          alt="Img"
          className="w-full h-[255px] rounded-t-md "
        />
      </div>
      <div className="w-[296px] mx-auto mt-[24px] mb-8 ">
        <h1
          className=" 
 font-bold
 text-[24px]
 tracking-[0.2px]
 leading-[1.286]
 text-[#183B56]"
        >
          {data?.title?.slice(0, 50)}
        </h1>
        <p className="mt-[12px] text-[#5A7184] text-[14px] ">{data?.description?.slice(0, 70)} ... </p>
        <div className="mt-[29px] flex justify-between ">
          <div className="flex gap-3">
            <img
              src={data?.author?.profile_picture}
              alt=""
              className=" rounded-[999px]
 bg-[50%_50%]
 bg-cover
 bg-no-repeat
 w-[40px]
 h-[40px]"
            />
            <div>
              <p className=" italic font-bold text-[16px] md:text-[18px] text-darkblue">
                {data?.author?.name}
              </p>
              <p className="font-['Open_Sans'] italic font-normal text-[14px] text[#5A7184]">
                Normal
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray font-semibold italic">
              {moment(data?.createdAt).format("MMMM Do")}
            </p>
          </div>
        </div>
      </div>
     
    </Link>
    

  );
}

export default BlogCard;





