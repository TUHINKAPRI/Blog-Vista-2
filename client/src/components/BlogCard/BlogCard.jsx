
import { Avatar, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import moment from "moment";
function BlogCard({ data }) {
  return (
    <Link to={`/blog/${data?._id}`} className=" mx-auto">
      <Card
        className="max-w-[400px] border-none p-2  h-56   "
        renderImage={() => (
          <img   src={data?.thumbnail} alt="image 1" className="w-52 h-52 hidden md:flex  " />
        )}
        horizontal
      >
        <h5 className=" text-lg sm:text-2xl font-bold tracking-tight text-gray dark:text-white">
          {data?.title.slice(0, 45)} ...
        </h5>
        <p className="font-normal text-[13px] sm:text-base text-gray dark:text-gray-400">
          {data?.description.slice(0, 70)}...
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
