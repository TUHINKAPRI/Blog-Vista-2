import MainLayout from "@/Layout/MainLayout";
import Hero from "@/components/Header/Hero";
import Loading from "@/components/Loading/Loading";
import Category from "@/components/home/Category";
import FewPostData from "@/components/home/FewPostData";
import { getAllCategory } from "@/services/operations/ctegoryOperation";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["GET_ALL_CATEGORY"],
    queryFn: getAllCategory,
  });
  if (isLoading) {
    return <Loading />;
  }



  return (
    <MainLayout>
      <Hero />
      <Category category={data} />
      <FewPostData/>
    </MainLayout>
  );
}

export default Home;
