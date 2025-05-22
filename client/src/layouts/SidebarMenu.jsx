import { NavLink, useParams } from "react-router-dom";

function SidebarMenu({ userId }) {
  return (
    <div className="links">
      <NavLink to={`/home/${userId}`} className="navLink">
        Home
      </NavLink>
      <NavLink to={`/projects/${userId}`} className="navLink">
        Projects
      </NavLink>
      <NavLink to={`/profile/${userId}`} className="navLink">
        Profile
      </NavLink>
    </div>
  );
}

export default SidebarMenu;
