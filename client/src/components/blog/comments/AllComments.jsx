import { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  create_comment,
  delete_comment,
  update_comment,
} from "@/services/operations/commentsOperation";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loading from "@/components/Loading/Loading";
import { Link } from "react-router-dom";

function AllComments({ comments, postId }) {
  const { user } = useSelector((state) => state.profile);
  const [isOpen, setIsOpen] = useState(null);
  const [value, setValue] = useState(null);
  const queryClient = useQueryClient();
  const { mutate: editMutate, isPending: editPending } = useMutation({
    mutationFn: update_comment,
    onSuccess: async (data) => {
      toast.success(data?.message);
      setIsOpen(null);
      queryClient.invalidateQueries({ queryKey: ["Signle_blog"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const { mutate: addComment, isPending: pendingAddComment } = useMutation({
    mutationFn: create_comment,
    onSuccess: async (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["Signle_blog"] });
    },

    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: delete_comment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["Signle_blog"] });
      toast.success(data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const editHandler = (data) => {
    setIsOpen(data);
  };

  if (deletePending) {
    return <Loading />;
  }

  const deleteHandler = (commentId) => {
    deleteMutate({ postId, commentId: commentId });
  };

  const updateComment = (data) => {
    editMutate({ content: data, postId: postId, commentId: isOpen });
  };

  const addCommentHandler = (data) => {
    setValue("");
    addComment({ content: data, postId: postId });
  };

  return (
    <div>
      <div >
        {user ? (
          <>
            <div className="mt-[70px]" >
            <CommentForm
              formSubmitHnadler={addCommentHandler}
              pending={pendingAddComment}
            />
            </div>
          </>
        ) : (
          <>
            <h1 className="font-semibold text-lg">Need To Login For Create comemnt
            <Link className="ms-2 text-lightblue " to='/sign-in'>
              sign-in
            </Link>
            </h1>
          </>
        )}
      </div>
      <h1 className="font-semibold text-[20px] mt-3 ">
        All comments
        <span className="text-[15px]">{` (${comments?.length})`}</span>
      </h1>
      <div className="flex mt-7 flex-col gap-5">
        {comments?.map((ele, index) => (
          <Comment
            key={index}
            data={ele}
            editHandler={editHandler}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            updateComment={updateComment}
            deleteHandler={deleteHandler}
            userId={user?._id}
          />
        ))}
      </div>
    </div>
  );
}

export default AllComments;
