import BlogCard from "@/components/BlogCard/BlogCard";
import { Bread } from "@/components/Breadcrumb/Bread";
import Loading from "@/components/Loading/Loading";
import { getUserBookmarks } from "@/services/operations/bookmarkOperation";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Bookmarks() {
  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "dashboard",
      path: "/dashboard/user",
    },
    {
      name: "bookmarks",
    },
  ];

  const { data, isLoading } = useQuery({
    queryKey: ["Bookmarks"],
    queryFn: getUserBookmarks,
  });

  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data);
  return (
    <div className="overflow-auto">
      <div>
        <h1 className="text-[24px] text-darkblue   font-semibold">Bookmarks</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <div className="flex flex-wrap gap-4 mt-5">
        {data?.data?.posts?.map((ele, index) => (
          <BlogCard key={index} data={ele} />
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
