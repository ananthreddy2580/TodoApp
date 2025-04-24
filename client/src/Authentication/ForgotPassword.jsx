import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../Landingpage/LandingNavbar.jsx";
import { useAuthStore } from "./auth-store.jsx";
import { SendResetLink, getCsrfToken } from "./auth-logic.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// const token = Cookies.get("csrftoken");
// console.log(token);

function Forgot() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
  });

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  const SendResetLinkToEmail = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("csrftoken");
      console.log(formData);
      if (token) {
        const SendResetLinkResult = await SendResetLink(formData, token);
        if (SendResetLinkResult.status === "success") {
          toast.success(SendResetLinkResult.message);
        } else {
          toast.error(SendResetLinkResult.message);
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
            <h2>Forgot Password</h2>
            <p>
              We'll send a password reset link to your email address. So please
              enter your Email
            </p>

            <form className="signupForm" onSubmit={SendResetLinkToEmail}>
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
              <br></br>
              <br></br>

              <button className="signup1-btn" type="submit">
                Send Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
