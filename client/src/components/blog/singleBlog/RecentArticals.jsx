import React from "react";
import { Link } from "react-router-dom";

function RecentArticals({ postsData, tagsData }) {
  return (
    <div className="  ">
      <div
        className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 mt- `}
      >
        <h2 className="font-roboto mt-3 ms-2 font-medium text-dark-hard md:text-xl">
          Latest Article
        </h2>
        <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
          {postsData?.slice(0,4)?.map((item) => (
            <div
              key={item._id}
              className="flex space-x-3 flex-nowrap items-center"
            >
              <img
                className="aspect-square object-cover rounded-lg w-1/5"
                src={item?.thumbnail}
                alt="laptop"
              />
              <div className="text-sm font-roboto text-dark-hard font-medium">
                <h3 className="text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg">
                  {item.title}
                </h3>
                <span className="text-xs opacity-60">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">
          Tags
        </h2>
        <div className="flex flex-wrap  mb-6 gap-x-2 gap-y-2 mt-4">
          {tagsData.map((item, index) => (
            <button
             onClick={()=>{}}
              key={index}
              className="inline-block rounded-md px-3 py-1.5 border border-lightblue font-roboto text-xs text-lightblue md:text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentArticals;
