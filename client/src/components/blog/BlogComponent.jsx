import moment from "moment";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { MdBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkRemove } from "react-icons/md";
import {
  add_to_Bookmark,
  remove_to_bookmark,
} from "@/services/operations/bookmarkOperation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { Tooltip } from "flowbite-react";
import {
  addToBookmark,
  removeFromBookmark,
} from "@/redux/slices/bookmarkSlice";
function BlogComponent({ seacrhPost }) {
  const { bookmarkData } = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();
  const {
    mutate: addBookmark,
    mutateAsync: addbook,
    isPending: addPending,
  } = useMutation({
    mutationFn: add_to_Bookmark,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.data?.message);
    },
  });
  const {
    mutate: removeBookmark,
    mutateAsync: removebook,
    isPending: removePending,
  } = useMutation({
    mutationFn: remove_to_bookmark,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  if (removePending || addPending) {
    return <Loading />;
  }
  const addbookmarkControllers = async (postId) => {
    await addbook({ postId: postId });
    dispatch(addToBookmark(postId));
  };
  const removeBookmarkControllers = async (postId) => {
    await removebook({ postId: postId });
    dispatch(removeFromBookmark(postId));
  };
  return (
    <section className="flex flex-col gap-4">
      {seacrhPost?.length > 0 ? (
        <>
          {seacrhPost?.map((post, index) => (
            <div key={index} className=" mx-auto px-5   inline-block  ">
              <div className="flex text-gray mt-2 mb-2 items-center gap-3">
                <img
                  src={post?.author?.profile_picture}
                  alt="img"
                  className="h-6 w-6 rounded-full "
                />
                <p className=" text-[14px]  ">{post?.author?.name}</p>
                <p className=" text-[13px] text-center  md:text-[14px] ">
                  {moment(post?.createdAt).format("DD MMMM YYYY, HH:mm")}
                </p>
                {post?.paid && (
                  <div className="felx  ">
                    <FaStar
                      className="text-[#e6db49] inline-block  "
                      size={20}
                    />
                    <FaStar
                      className="text-[#e6db49] inline-block  "
                      size={15}
                    />
                    <FaStar
                      className="text-[#e6db49] inline-block "
                      size={10}
                    />
                  </div>
                )}
              </div>
              <div className="grid mx-auto grid-cols-5 justify-between">
                <div className=" col-span-3 lg:col-span-4">
                  <Link to={`/blog/${post._id}`}>
                    <h1 className=" text-[15px]  md:text-[20px] font-bold mt-3">
                      {post?.title}
                    </h1>
                    <p className="mt-2 hidden  md:flex ">{post?.description}</p>
                  </Link>
                  <div className="flex items-center my-4 gap-4">
                    <button className="border-lightblue border inline-block text-lightblue px-3 text-[14px] font-semibold rounded-xl">
                      {post.category?.name}
                    </button>
                    {bookmarkData.includes(post?._id) ? (
                      <>
                        <button
                          onClick={() => {
                            removeBookmarkControllers(post?._id);
                          }}
                        >
                          <Tooltip
                            content="REMOVE"
                            className="border-gray"
                            style="light"
                          >
                            <MdOutlineBookmarkRemove
                              className="text-gray"
                              size={20}
                            />
                          </Tooltip>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            addbookmarkControllers(post?._id);
                          }}
                        >
                          <Tooltip content="ADD" style="light">
                            <MdBookmarkAdd className="text-gray" size={20} />
                          </Tooltip>
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className=" w-[112px] ms-5  mt-4 items-end sm:w-[200px]">
                  <img
                    src={post?.thumbnail}
                    alt="ewfewfg"
                    className=" h-[56px]  md:h-[120px] w-20 md:w-full object-cover  rounded-md"
                  />
                </div>
              </div>
              <hr className="text-gray opacity-10 my-2 " />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="flex text-xl font-semibold w-full h-[400px] justify-center items-center">
            No post Found
          </div>
        </>
      )}
    </section>
  );
}

export default BlogComponent;
