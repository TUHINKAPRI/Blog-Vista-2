import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";

function MainLayout({ children }) {
  return (
    <>
      <div className="md:max-w-7xl mx-auto sm:max-w-2xl px-3 max-w-80">
        <NavBar />
        {children}
      </div>
      <div className="mt-20 ">
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
