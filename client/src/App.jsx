import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Suspense } from "react";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <div className="bg-[#F9FCFF]  h-screen ">
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/blog"  element={<Blog/>} />
          <Route path='/blog/:id' element={<SingleBlog/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
