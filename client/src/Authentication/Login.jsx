import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../Landingpage/LandingNavbar.jsx";
import { useAuthStore } from "./auth-store.jsx";
import { LoginUser, getCsrfToken } from "./auth-logic.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// const token = Cookies.get("csrftoken");
// console.log(token);

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const NavToLearnMore = () => {
  //   navigate("/");
  // };

  const NavToSignup = () => {
    navigate("/sign-up");
  };
  const NavToForgot = () => {
    navigate("/forgot-password");
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  const NavToHome = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("csrftoken");
      if (token) {
        const loginResult = await LoginUser(formData, token);
        if (loginResult.status === "success") {
          toast.success(loginResult.message);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          toast.error(loginResult.message);
        }
      } else {
        toast.error("Token not found");
      }
    } catch (error) {
      toast.error("something went wrong");
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
