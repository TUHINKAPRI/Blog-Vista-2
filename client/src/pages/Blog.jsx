import MainLayout from "@/Layout/MainLayout";
import Loading from "@/components/Loading/Loading";
import SearchBox from "@/components/Search/Search";
import Category from "@/components/home/Category";
import { get_all_blogs } from "@/services/operations/blogOperation";
import { getAllCategory } from "@/services/operations/ctegoryOperation";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import BlogComponent from "@/components/blog/BlogComponent";
import { Bread } from "@/components/Breadcrumb/Bread";
function Blog() {
  const navigate = useNavigate();
  const queryParams = queryString.parse(window.location.search);
  const query = queryParams;
  // useEffect(() => {
  //   setSearchData(window.location.search);
  // }, [window.location.search]);

  const { data, isLoading } = useQuery({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: getAllCategory,
  });

  const { data: allPost, isLoading: postLoading } = useQuery({
    queryKey: ["Fetch_all-post"],
    queryFn: get_all_blogs,
  });

  const { data: seacrhPost, isLoading: searchpostLoading } = useQuery({
    queryKey: ["Fetch_all-post", window.location.search],
    queryFn: get_all_blogs,

    enabled: Object.keys(query).length > 0,
  });

  const serchSubmitHandler = (data) => {
    navigate(`/blogs?search=${data}`);
  };

  const categoryHandler = (category) => {
    navigate(`/blogs?category=${category}`);
  };

  if (isLoading || searchpostLoading || postLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);
  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "all blogs",
    },
  ];
  return (
    <MainLayout>
      <div>
        <h1 className="text-[24px] text-darkblue   font-semibold"> All Blogs</h1>
        <Bread breadcrumb={breadcrumb} />
      </div>
      <header className="w-full flex-col gap-8 my-[100px]  flex justify-center items-center ">
        <div>
          <SearchBox
            size="  sm:w-[600px]"
            isLoading={false}
            serchSubmitHandler={serchSubmitHandler}
          />
        </div>
        <div>
          <Category category={data} categoryHandler={categoryHandler} />
        </div>
      </header>
      <div>
        {Object.keys(query).length > 0 ? (
          <>
            <BlogComponent seacrhPost={seacrhPost?.data} />
          </>
        ) : (
          <>
            <BlogComponent seacrhPost={allPost?.data} />
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Blog;
