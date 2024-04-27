

import React from "react";
import { Avatar, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import moment from "moment";
function BlogCard({ data }) {
  return (
    <Link to={`/blog/${data?._id}`}>
      <Card
        className="max-w-sm border-none p-2    "
        imgSrc={data?.thumbnail}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.title.slice(0, 50)}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data?.description.slice(0, 80)}.
        </p>
        <div className="flex gap-4 items-center justify-start">
          <Avatar
            img={data?.author?.profile_picture}
            alt="avatar of Jese"
            rounded
          />
          <div className="space-y-1 font-medium dark:text-white">
            <div>{data?.author?.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
            {moment(data?.createdAt).format("MMMM Do")}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default BlogCard;
