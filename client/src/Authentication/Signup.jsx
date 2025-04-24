import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../Landingpage/LandingNavbar.jsx";
import { CreateUser, getCsrfToken } from "./auth-logic.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
// import { showToastExternal } from "../components/Toast.jsx";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const NavToLogin = () => {
    navigate("/sign-in");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("csrftoken");
      if (token) {
        const status = await CreateUser(formData, token);
        if (status == "Success") {
          toast.success("User Created");
          navigate("/sign-in");
        } else if (status == "EmptyFields") {
          toast.error("All fields are required");
        } else if (status == "PasswordNotMatched") {
          toast.error("Password does not matched");
        } else {
          toast.error("User not created");
          console.log("not created");
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
            <h2>Sign-Up</h2>

            {/* {error && <p className="error-message">{error}</p>} */}

            <form className="signupForm" onSubmit={handleSignup}>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

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

              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="signup1-btn">
                Signup
              </button>
            </form>

            <p className="login-link">
              Already have an account?{" "}
              <span className="ConnectLinks" onClick={NavToLogin}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
