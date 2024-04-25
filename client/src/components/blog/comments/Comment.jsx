import moment from "moment";
import CommentForm from "./CommentForm";
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
function Comment({
  userId,
  data,
  editHandler,
  isOpen,
  setIsOpen,
  updateComment,
  deleteHandler
}) {
  return (
    <div className="flex w-full p-2 sm:p-5 rounded-lg text-gray gap-4 bg-[#F2F4F5]">
      <div>
        <img
          src={data?.user?.profile_picture}
          alt="creator"
          className="w-[40px] rounded-full h-[40px]"
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div>
          <p className="text-[#000000] mb-1 font-semibold text-[18px]  ">
            {data?.user?.name}
          </p>
          <p className="text-[10px]">
            {" "}
            {moment(data?.createdAt).format("DD MMMM YYYY, HH:mm")}
          </p>
        </div>
        {isOpen ? (
          <>
            {isOpen === data?._id ? (
              <></>
            ) : (
              <div className=" mt-2 sm:mt-5">{data?.content}</div>
            )}
          </>
        ) : (
          <div className=" mt-2 sm:mt-5">{data?.content}</div>
        )}

        {isOpen && isOpen === data?._id && (
          <div className=" mt-2 sm:mt-5">
            <CommentForm
              isEdit={true}
              value={data?.content}
              setIsOpen={setIsOpen}
              formSubmitHnadler={updateComment}
            />
          </div>
        )}

        <div className="flex gap-4 text-gray sm:mt-5  mt-2 ">
          <button className=" flex justify-start ">
            <span className="me-2">
              <img src="/chat.png" alt="" className="inline-block" />
            </span>

            <span className="font-semibold">Reply</span>
          </button>
          {userId === data?.user?._id && (
            <div className="flex gap-4" >
              <button
                className="flex items-center ms-2 "
                onClick={() => {
                  editHandler(data._id);
                }}
              >
                <span className="me-2">
                  <MdModeEditOutline />
                </span>
                Edit
              </button>

              <button
                className="flex items-center ms-2 "
                onClick={() => {
                  deleteHandler(data._id);
                }}
              >
                <span className="me-2">
                  <MdDeleteOutline />
                </span>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
