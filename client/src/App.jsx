import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Suspense } from "react";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Loading from "./components/Loading/Loading";
import OTPinput from "./pages/OTPinput";
import OpenRoute from "./components/auth/OpenRoute";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import MyProfile from "./components/dashboard/MyProfile";
import Settings from "./components/dashboard/settings/Settings";
import CreateBlog from "./components/dashboard/blog/CreateBlog";
import EditBlog from "./components/dashboard/blog/EditBlog";
import Membership from "./pages/Membership";
import MyBlogs from "./components/dashboard/MyBlogs";
import UserDashboard from "./components/dashboard/UserDashboard";
import Bookmarks from "./components/dashboard/bookmarks/Bookmarks";

function App() {
  return (
    <div className=" bg-[#F9FCFF]  ">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/membership" element={<Membership />} />
          <Route
            path="/sign-up"
            element={
              <OpenRoute>
                <SignUp />
              </OpenRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <OpenRoute>
                <SignIn />
              </OpenRoute>
            }
          />

          <Route
            path="/send-otp"
            element={
              <OpenRoute>
                <OTPinput />
              </OpenRoute>
            }
          />

          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
          <Route path='/dashboard/user' element={<UserDashboard/>}/>
            <Route path="/dashboard/my-profile" element={<MyProfile />} />
            <Route path="/dashboard/my-blog" element={<MyBlogs />} />
            <Route path="/dashboard/bookmarks" element={<Bookmarks />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/create-blog" element={<CreateBlog />} />
            <Route path="/dashboard/edit-blog/:id" element={<EditBlog />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
