import MainLayout from "@/Layout/MainLayout";
import { Breadcrumbs } from "@/components/Breadcrumb";
import Loading from "@/components/Loading/Loading";
import RecentArticals from "@/components/blog/singleBlog/RecentArticals";
import { get_Single_blog } from "@/services/operations/blogOperation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import AllComments from "@/components/blog/comments/AllComments";
function SingleBlog() {
  const postsData = [
    {
      _id: "1",
      image: "",
      title: "Help children get better education",
      createdAt: "2023-05-9T15:35:53.607+0000",
    },
    {
      _id: "2",
      image: "",
      title: "Help children get better education",
      createdAt: "2023-05-9T15:35:53.607+0000",
    },
    {
      _id: "3",
      image: "Images.Post1Image",
      title: "Help children get better education",
      createdAt: "2023-05-9T15:35:53.607+0000",
    },
    {
      _id: "4",
      image: " Images.Post1Image",
      title: "Help children get better education",
      createdAt: "2023-05-9T15:35:53.607+0000",
    },
  ];

  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["Signle_blog"],
    queryFn: () => {
      return get_Single_blog(id);
    },
  })
  if (isLoading) {
    return <Loading />;
  }
  return (
    <MainLayout>
      <div className="bg-[#F9FCFF] sm:w-[700px] lg:w-full mx-auto  ">
        <div className="mb-[29px] hidden md:flex ">
          <Breadcrumbs />
        </div>
        <div className="grid md:mt-0 mt-5 lg:grid-cols-6   ">
          <div className="  lg:col-span-4   rounded-lg ">
            {/* img */}
            <div className=" w-[270px]    sm:w-[637px] h-[171px] sm:h-[405px]  rounded-lg ">
              <img
                src={data?.data?.thumbnail}
                className=" w-[270px]    sm:w-[637px] sm:h-[405px] h-[171px]  rounded-lg "
              />
            </div>
            {/* categfory */}
            <h1 className="my-[25px] uppercase text-lightblue ">
              {data?.data?.category?.name}
            </h1>
            <div className=" font-medium text-[26px] mb-[26px] text-[#0D2436]">
              {data?.data?.title}
            </div>
            <div className="text-[#183B56]  ">{data?.data?.description}</div>
            <div className="text-[#183B56]  ">
              <div dangerouslySetInnerHTML={{ __html: data?.data?.content }} />
            </div>
           
            <div className="">
             <AllComments  postId={data?.data?._id} comments={data?.data?.comments.reverse()} />
            </div>
           
          </div>
          <div className="lg:col-span-2  mt-10  lg:mt-0 lg:w-full ">
            <RecentArticals postsData={postsData} tagsData={data?.data?.tags} />
          </div>
          
        </div>
      </div>
    </MainLayout>
  );
}

export default SingleBlog;
