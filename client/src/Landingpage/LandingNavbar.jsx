import { useNavigate } from "react-router-dom";

function LandingNavbar() {
  const navigate = useNavigate();
  const NavToLandingPage = () => {
    navigate("/");
  };
  const NavToLogin = () => {
    navigate("/sign-in");
  };
  const NavToSignup = () => {
    navigate("/sign-up");
  };
  return (
    <>
      <div className="OutpageNavbar">
        <div className="nav-title" onClick={NavToLandingPage}>
          To-Do App
        </div>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={NavToLogin}>
            Login
          </button>
          <button className="nav-btn signup-btn" onClick={NavToSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingNavbar;
