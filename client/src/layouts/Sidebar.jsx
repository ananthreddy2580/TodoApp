import SidebarMenu from "./SidebarMenu";
import SidebarWorkspace from "./SidebarWorkspace";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { userId } = useParams();

  return (
    <>
      <div className="sideNavPageContainer">
        <div className="sideNavTopContainer">
          <SidebarWorkspace />
        </div>
        <div className="sideNavBottomContainer">
          <SidebarMenu userId={userId} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
