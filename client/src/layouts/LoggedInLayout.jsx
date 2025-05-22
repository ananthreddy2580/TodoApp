import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../components/home";
import AllProjects from "../components/Projects/AllProjectsView";
import Profile from "../components/profile";

function LoggedInLayout({ page }) {
  const { userId } = useParams();

  let PageComponent;
  if (page === "home") PageComponent = <Home />;
  else if (page === "projects") PageComponent = <AllProjects />;
  else if (page === "profile") PageComponent = <Profile />;

  return (
    <div className="fullView">
      <div className="leftView">
        <Sidebar userId={userId} />
      </div>
      <div className="rightView">{PageComponent}</div>
    </div>
  );
}

export default LoggedInLayout;
