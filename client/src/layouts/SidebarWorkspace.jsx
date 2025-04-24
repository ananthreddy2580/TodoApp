import { useState, useEffect, useRef } from "react";
import SidebarWorkspaceMenu from "./SidebarWorkspaceMenu";

function SidebarWorkspace() {
  // Declarations
  const [isOpen, setIsOpen] = useState(false);
  const workSpaceRef = useRef(null);
  const workSpaceDivRef = useRef(null);
  const workspace = [
    { name: "CheckIn Space", role: "Member", members: 5, selected: true },
    { name: "another", role: "Admin", members: 1, free: true },
  ];
  const selectedWorkspace = workspace.find((wkspace) => wkspace.selected);

  // Functions
  const OpenWorkspaceMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect
  useEffect(() => {
    const ClickOutside = (event) => {
      if (
        workSpaceRef.current &&
        workSpaceDivRef &&
        !workSpaceRef.current.contains(event.target) &&
        !workSpaceDivRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", ClickOutside);
    return () => {
      document.removeEventListener("mousedown", ClickOutside);
    };
  });

  return (
    <>
      <div className="workSpaceContainer" ref={workSpaceDivRef}>
        <div className="workSpace" onClick={OpenWorkspaceMenu}>
          <div className="firstLetterLogo">
            {selectedWorkspace.name ? selectedWorkspace.name.charAt(0) : "W"}
          </div>
          <div className="workSpaceName">
            <div className="workSpaceMenuDiv">
              <span className="selectedWorkspace">
                {selectedWorkspace ? selectedWorkspace.name : "Plane"}
              </span>
            </div>
          </div>
        </div>
        {isOpen && (
          <SidebarWorkspaceMenu
            workSpaceRef={workSpaceRef}
            workspace={workspace}
          />
        )}
      </div>
    </>
  );
}

export default SidebarWorkspace;
