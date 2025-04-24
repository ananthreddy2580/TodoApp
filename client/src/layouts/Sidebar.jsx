import SidebarMenu from "./SidebarMenu";
import SidebarWorkspace from "./SidebarWorkspace";
function Sidebar() {
  return (
    <>
      <div className="sideNavPageContainer">
        <div className="sideNavTopContainer">
          <SidebarWorkspace />
        </div>
        <div className="sideNavBottomContainer">
          <SidebarMenu />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
