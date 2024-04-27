import { useMutation } from "@tanstack/react-query";
import BlogForm from "./BlogForm";
import { create_blog } from "@/services/operations/blogOperation";
import toast from "react-hot-toast";
import { logout } from "@/redux/slices/profileSlice";
import { setBlogs } from "@/redux/slices/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bread } from "@/components/Breadcrumb/Bread";

function CreateBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: create_blog,
    onSuccess: (res) => {
      toast.success(res?.message);
      dispatch(setBlogs(res.data));
    },
    onError: (error) => {
      if (error?.data?.status === 403) {
        toast.error(error?.data?.message);
        dispatch(logout());
        return navigate("/");
      }
      toast.error(error?.data?.message);
    },
  });
  const submitPostHandler = (data) => {
    console.log(data);
    const fd=new FormData();

   fd.append('title',data.title);
   fd.append('description',data.description);
   fd.append('thumbnail',data?.thumbnail);
   fd.append('content',data.content);
   fd.append('category',data.category);
   fd.append('tags',JSON.stringify(data.tags));
   fd.append('paid',data.paid);
   mutate(fd)
  };

  const breadcrumb=[
    {
      name:'Home',
      path:'/',
    
    },{
      name:'dashbaord',
      path:'/dashboard/user'
    },{
      name:'create blog'
    }
  ]
  return (
    <div className="">
     <div>
        <h1 className="text-[24px] text-darkblue   font-semibold"> Create Blogs</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <div className="bg-white p-3 h-screen overflow-auto ">

        <BlogForm submitPostHandler={submitPostHandler} isLoading={isPending} />
      </div>
    </div>
  );
}

export default CreateBlog;
