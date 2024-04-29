import MainLayout from "@/Layout/MainLayout";

import Loading from "@/components/Loading/Loading";
import RecentArticals from "@/components/blog/singleBlog/RecentArticals";
import {
  get_Single_blog,
  get_all_blogs,
} from "@/services/operations/blogOperation";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import AllComments from "@/components/blog/comments/AllComments";
import { Bread } from "@/components/Breadcrumb/Bread";
import { Button } from "flowbite-react";
function SingleBlog() {
  const navigate=useNavigate()
  const { data: postsData, isLoading: postsDataLoading } = useQuery({
    queryKey: ["Fetch_all-post"],
    queryFn: get_all_blogs,
  });

  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["Signle_blog"],
    queryFn: () => {
      return get_Single_blog(id);
    },
  });
  if (isLoading || postsDataLoading) {
    return <Loading />;
  }
  console.log(data?.data);
  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "blog",
    },
  ];
  return (
    <MainLayout>
      {data?.data ? (
        <>
          <div className="bg-[#F9FCFF] sm:w-[700px] lg:w-full mx-auto  ">
            <div className="mb-[29px] hidden md:flex ">
              <div>
                <h1 className="text-[24px] text-darkblue   font-semibold">
                  Blogs
                </h1>
                <Bread breadcrumb={breadcrumb} />
              </div>
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
                <div className="text-[#183B56]  ">
                  {data?.data?.description}
                </div>
                <div className="text-[#183B56]  ">
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.data?.content }}
                  />
                </div>

                <div className="">
                  <AllComments
                    postId={data?.data?._id}
                    comments={data?.data?.comments?.reverse()}
                  />
                </div>
              </div>
              <div className="lg:col-span-2  mt-10  lg:mt-0 lg:w-full ">
                <RecentArticals
                  postsData={postsData?.data}
                  tagsData={data?.data?.tags}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-screen flex flex-col gap-3 justify-center items-center" >
            <h1 className="text-[24px] text-darkblue   font-semibold">
              {data?.message}
            </h1>
            <Button onClick={()=>navigate('/membership')}  className="font-semibold text-[16px] bg-darkblue hover:opacity-80 transition-opacity ease-in-out duration-300  " >
                Membership
            </Button>
          </div>
        </>
      )}
    </MainLayout>
  );
}

export default SingleBlog;
