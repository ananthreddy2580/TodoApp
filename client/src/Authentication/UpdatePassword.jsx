import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LandingNavbar from "../Landingpage/LandingNavbar.jsx";
import { UpdatePass, getCsrfToken } from "./auth-logic.js";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function UpdatePassword() {
  const navigate = useNavigate();
  const { uidb64, token } = useParams();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

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

  const NavToLogin = async (e) => {
    e.preventDefault();
    try {
      const csrftoken = Cookies.get("csrftoken");
      if (csrftoken) {
        const UpdatePasssResult = await UpdatePass(
          formData,
          uidb64,
          token,
          csrftoken
        );
        console.log(UpdatePasssResult);
        if (UpdatePasssResult.status === "success") {
          toast.success(UpdatePasssResult.message);
          navigate("/sign-in");
        } else {
          toast.error(UpdatePasssResult.message);
        }
      } else {
        toast.error("Token not found");
      }
    } catch (error) {
      console.log(error);
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
            <h2>Update Password</h2>

            <form className="signupForm" onSubmit={NavToLogin}>
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
                  placeholder="Enter your confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button className="signup1-btn" type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
