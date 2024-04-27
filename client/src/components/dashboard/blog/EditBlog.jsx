import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "./BlogForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  get_Single_blog,
  update_post,
} from "@/services/operations/blogOperation";
import Loading from "@/components/Loading/Loading";
import toast from "react-hot-toast";
import { Bread } from "@/components/Breadcrumb/Bread";

function EditBlog() {
  const { id } = useParams();
  const queryClient=useQueryClient()
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["Signle_blog"],
    queryFn: () => {
      return get_Single_blog(id);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: update_post,
    onSuccess: (data) => {
      toast.success(data?.message)
      queryClient.invalidateQueries(["Fetch_all-post"])
      navigate('/dashboard/my-blog')
    },
    onError: (err) => {
      console.log(err);
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  const submitPostHandler = (datas) => {
    const fd = new FormData();
    fd.append("title", datas.title);
    fd.append("description", datas.description);
    fd.append("thumbnail", datas?.thumbnail);
    fd.append("content", datas.content);
    fd.append("category", datas.category);
    fd.append("tags", JSON.stringify(datas.tags));
    fd.append("paid", datas.paid);
    mutate({ id: id, content: fd });
  };

  const breadcrumb=[
    {
      name:'Home',
      path:'/'
    },{
      name:'dashboard',
      path:'/dashboard/user'
    },{
      name:'edit blog',
      
    }
  ]
  return (
    <div className="max-w-4xl  mx-auto ">
    <div>
        <h1 className="text-[24px] text-darkblue   font-semibold">Edit Blogs</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <div>
        <BlogForm
          submitPostHandler={submitPostHandler}
          formValue={data?.data}
          isLoading={isPending}
        />
      </div>
    </div>
  );
}

export default EditBlog;
