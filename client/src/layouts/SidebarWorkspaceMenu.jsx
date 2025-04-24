function SidebarWorkspaceMenu({ workSpaceRef, workspace }) {
  return (
    <>
      <div ref={workSpaceRef} className="workSpaceMenu">
        <div className="userMail">mandliananth@gmail.com</div>
        <div className="workSpaceList">
          <ul className="workSpaceUl">
            {workspace.map((wkspace, index) => {
              return (
                <li key={index}>
                  <div className="workSpaceElement">
                    <div className="workspace">
                      <div className="firstLetterLogo fLogo">
                        {wkspace.name ? wkspace.name.charAt(0) : "W"}
                      </div>
                      <div className="workSpaceAllDetails">
                        <div className="workspaceDetails">
                          <div className="workspaceName">{wkspace.name}</div>
                          <div className="workspaceUserTypeAndMembers">
                            <div className="workspaceUserType">
                              {wkspace.role}
                            </div>
                            <div className="workspaceMembersCount">
                              {wkspace.members == 1 &&
                                wkspace.members + " Member"}
                              {wkspace.members != 1 &&
                                wkspace.members + " Members"}
                            </div>
                          </div>
                        </div>
                        {wkspace.selected == true && (
                          <div className="worspaceActive">✔</div>
                        )}
                      </div>
                    </div>
                    {wkspace.selected == true && (
                      <div className="workSpaceActiveFeatures">
                        <div className="workSpaceSettings">Settings</div>
                        <div className="workSpaceInviteMembers">
                          Invite Members
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="createAndLogOut">
          <div className="createWorkSpaceButton">Create WorkSpace</div>
          <div className="signOutButton">Sign Out</div>
        </div>
      </div>
    </>
  );
}

export default SidebarWorkspaceMenu;
