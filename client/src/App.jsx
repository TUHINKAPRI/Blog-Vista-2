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

function App() {
  return (
    <div className="bg-[#F9FCFF]   h-screen ">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
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
            <Route path="/dashboard/my-profile" element={<MyProfile />} />
            <Route path='/dashboard/settings' element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
