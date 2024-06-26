import { get_all_blogs } from "@/services/operations/blogOperation";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import BlogCard from "../BlogCard/BlogCard";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function FewPostData() {
  const navigate=useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ["Fetch_all-post"],
    queryFn: get_all_blogs,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col   " > 
      <div className="flex justify-between items-center gap-[30px] mt-[102px] flex-wrap">
        {data?.data?.slice(0,6).map((ele, index) => (
          <BlogCard data={ele} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-10  " >
        <Button
          variant="outline"
          className="border-lightblue text-lightblue "
          onClick={()=>{navigate('/blogs')}}
        >

          More Articals  <span className="ms-4" > <FaArrowRight/> </span>
        </Button>
      </div>
    </div>
  );
}

export default FewPostData;
