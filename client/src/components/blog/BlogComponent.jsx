import moment from 'moment'
import React from 'react'
import { BsBookmarkPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function BlogComponent({seacrhPost}) {
  return (
    <section className="flex flex-col gap-4">
    {
      seacrhPost?.length>0?(<>
        {seacrhPost?.map((post, index) => (
          <div key={index} className="mx-auto">
            <div className="flex text-gray items-center gap-3">
              <img
                src={post?.author?.profile_picture}
                alt="img"
                className="h-6 w-6 rounded-full "
              />
              <p className="text-[14px] sm:text-[16px] ">
                {post?.author?.name}
              </p>
              <p className="text-[14px]  sm:text-[16px]">
                {moment(post?.createdAt).format("DD MMMM YYYY, HH:mm")}
              </p>
            </div>
            <div className="grid mx-auto grid-cols-5 justify-between">
              <div className=" col-span-3 lg:col-span-4">
                <Link to={`/blog/${post._id}`}>
                  <h1 className="sm:text-[20px] font-bold mt-3">
                    {post?.title}
                  </h1>
                  <p className="mt-2 hidden sm:flex ">{post?.description}</p>
                </Link>
                <div className="flex items-center my-4 gap-4">
                  {post?.tags?.map((tag, index) => (
                    <button
                      key={index}
                      className="border-lightblue border inline-block text-lightblue px-3 text-[14px] font-semibold rounded-xl"
                    >
                      {tag}
                    </button>
                  ))}

                  <button>
                    <BsBookmarkPlus className="text-gray" size={16} />
                  </button>
                </div>
              </div>
              <div className=" w-[112px] ms-5  mt-4 items-end sm:w-[200px]">
                <img
                  src={post?.thumbnail}
                  alt="ewfewfg"
                  className=" h-[90px]  sm:h-[120px] w-full object-cover  rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </>):(<>
          <div className='flex text-xl font-semibold w-full h-[400px] justify-center items-center'   >
            No post Found
          </div>
      </>)
    }
        
      </section>
  )
}

export default BlogComponent