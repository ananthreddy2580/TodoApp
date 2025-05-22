import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../Landingpage/LandingNavbar.jsx";
import { useAuthStore, useUserIdStore } from "./auth-store.jsx";
import { LoginUser, getCsrfToken } from "./auth-logic.js";
import { CheckWorkSpaceCount } from "./check-workspace-count.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const token = Cookies.get("csrftoken");
  if (!token) {
    const csrfToken = getCsrfToken();
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  setIsLoggedIn(false);

  const setUserId = useUserIdStore((state) => state.setUserId);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const NavToSignup = () => {
    navigate("/sign-up");
  };
  const NavToForgot = () => {
    navigate("/forgot-password");
  };

  const NavToHome = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const loginResult = await LoginUser(formData, token);
        if (loginResult.status === "success") {
          console.log(loginResult.userId);
          toast.success(loginResult.message);
          setUserId(loginResult.userId);
          const CountOfWorkspaces = await CheckWorkSpaceCount(
            loginResult.userId,
            token
          );
          if (CountOfWorkspaces.count == 0) {
            navigate(`/create-workspace/${loginResult.userId}`);
          } else {
            setIsLoggedIn(true);
            navigate(`/home/${loginResult.userId}`);
          }
        } else {
          toast.error(loginResult.message);
        }
      } else {
        toast.error("Token not found");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong11");
    }
  };

  return (
    <>
      <div className="signupPageContainer">
        <nav className="navbar">
          <LandingNavbar />
        </nav>
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign-In</h2>

            <form className="signupForm" onSubmit={NavToHome}>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button className="signup1-btn" type="submit">
                Sign In
              </button>
            </form>
            <div className="bottomLinks">
              <p className="login-link">
                Don't have an account?{" "}
                <span className="ConnectLinks" onClick={NavToSignup}>
                  SignUp
                </span>
              </p>
              <p className="forgotPassword" onClick={NavToForgot}>
                Forgot Password
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
