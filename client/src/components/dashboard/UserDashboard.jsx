import { useQuery } from "@tanstack/react-query";
import { Bread } from "../Breadcrumb/Bread.jsx";
import { MdPostAdd } from "react-icons/md";
import { getUserBlogs } from "@/services/operations/userOperation.js";
import { AiFillLike } from "react-icons/ai";
import Loading from "../Loading/Loading.jsx";
import { FaComment } from "react-icons/fa";
import { Button, Table } from "flowbite-react";
import { BsHandIndex } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function UserDashboard() {
  const navigate=useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["GET_USER_BLOGS"],
    queryFn: getUserBlogs,
  });

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

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
      name: "user",
      path: "#",
    },
  ];

  return (
    <div className=""  >
      <div>
        <h1 className="text-[24px] text-darkblue   font-semibold">Dashboard</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <div className="mt-6">
        <div className="flex gap-9 flex-col sm:flex-row   ">
          <div className="bg-darkwhite w-[200px] mx-auto sm:mx-0  p-4 rounded-md ">
            <p className="text-xl mb-3 text-darkblue">Total post</p>
            <div className="flex gap-4 items-center">
              <MdPostAdd size={40} className=" text-lightblue" />
              <span className="text-xl">( {data?.data?.length} )</span>
            </div>
          </div>
          <div className="bg-darkwhite w-[200px] mx-auto  sm:mx-0 p-4 rounded-md ">
            <p className="text-xl mb-3 text-darkblue">Total Like</p>
            <div className="flex gap-4 items-center">
              <AiFillLike size={40} className=" text-lightblue" />
              <span className="text-xl">( 33 )</span>
            </div>
          </div>
          <div className="bg-darkwhite w-[200px] mx-auto  sm:mx-0 p-4 rounded-md ">
            <p className="text-xl mb-3 text-darkblue">Total comment</p>
            <div className="flex gap-4 items-center">
              <FaComment size={40} className=" text-lightblue" />
              <span className="text-xl">( 10 )</span>
            </div>
          </div>
        </div>
        <div className="bg-darkwhite  mt-6 flex flex-col p-5 ">
          <div className="flex justify-between">
          <h1 className="text-darkblue text-xl"> My Post</h1>
          <Button onClick={()=>(navigate('/dashboard/my-blog'))} className="bg-lightblue text-white">posts</Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Title</Table.HeadCell>
                <Table.HeadCell>Img</Table.HeadCell>
                <Table.HeadCell> Total Like</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data?.data?.slice(0, 5)?.map((ele, index) => (
                  <Table.Row
                    key={BsHandIndex}
                    className=" dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {ele.title}
                    </Table.Cell>
                    <Table.Cell>
                      <img src={ele?.thumbnail} alt="" className="w-[100px]" />
                    </Table.Cell>
                    <Table.Cell>{ele?.likes?.length}</Table.Cell>
                    <Table.Cell>{ele?.published}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
