import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Header/NavBar";

function MainLayout({ children }) {
  return (
    <div>
      <div className="md:max-w-6xl mx-auto sm:max-w-2xl max-w-80">
        <NavBar />
        {children}
      </div>
      <div className="mt-20"  >
      <Footer />
      </div>

  
    </div>
  );
}

export default MainLayout;
