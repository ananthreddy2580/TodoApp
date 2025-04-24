import { useNavigate } from "react-router-dom";
import Features from "./LandingFeatures.jsx";
import LandingNavbar from "./LandingNavbar.jsx";

function LandingHome() {
  const navigate = useNavigate();

  const NavToLearnMore = () => {
    navigate("/Learn-more");
  };

  const NavToSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <div className="landing-home">
      <nav className="navbar">
        <LandingNavbar />
      </nav>
      <main className="main-content">
        <div className="hero-section">
          <h1>Welcome to Your To-Do Companion</h1>
          <p>Organize your tasks, stay productive, and achieve your goals</p>
          <div className="cta-buttons">
            <button className="cta-btn" onClick={NavToSignUp}>
              Get Started
            </button>
            <button className="cta-btn secondary" onClick={NavToLearnMore}>
              Learn More
            </button>
          </div>
        </div>
        <div className="features">
          <Features />
        </div>
      </main>
    </div>
  );
}

export default LandingHome;
