import { NavLink } from "react-router-dom";
function SidebarMenu() {
  return (
    <>
      <div className="links">
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="Projects" className="navLink">
          Projects
        </NavLink>
        <NavLink to="profile" className="navLink">
          Profile
        </NavLink>
        {/* <Link to="projects/">Projects</Link> */}
      </div>
    </>
  );
}
export default SidebarMenu;
