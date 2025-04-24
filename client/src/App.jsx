import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Sidebar from "./layouts/Sidebar.jsx";
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
import Forgot from "./Authentication/ForgotPassword.jsx";
import UpdatePassword from "./Authentication/UpdatePassword.jsx";
import Home from "./components/home.jsx";
import LandingHome from "./Landingpage/LandingHome.jsx";
import LearnMore from "./Landingpage/LearnMore.jsx";
import AllProjects from "./components/Projects/AllProjectsView.jsx";
import Profile from "./components/profile.jsx";
import { useAuthStore } from "./Authentication/auth-store.jsx";
import { Toaster, toast } from "react-hot-toast";
// import CustomToast from "./components/Toast.jsx";

function App() {
  const location = useLocation();
  const paths = ["/", "/home", "/Projects", "/profile"];
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // false by default

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: " #082e3d",
            color: "white",
            fontSize: "16px",
            minWidth: "200px",
          },
        }}
      />
      {isLoggedIn ? (
        <div className="fullView">
          {paths.includes(location.pathname) && (
            <div className="leftView">
              <Sidebar />
            </div>
          )}
          <div className="rightView">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/sign-in" element={<Login />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      ) : (
        // 🔒 Out view shown when logged out
        <div className="OutView">
          <Routes>
            <Route path="/" element={<LandingHome />} />
            <Route path="/Learn-more" element={<LearnMore />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<UpdatePassword />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
