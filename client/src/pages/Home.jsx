import MainLayout from "@/Layout/MainLayout"
import Hero from "@/components/Header/Hero"
import Category from "@/components/home/Category"



function Home() {
  return (
    <MainLayout>
     <Hero/>
     <Category/>
    </MainLayout>
  )
}

export default Home