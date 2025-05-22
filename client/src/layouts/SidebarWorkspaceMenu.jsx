import { useAuthStore, useUserIdStore } from "../Authentication/auth-store";
import { useNavigate, useParams } from "react-router-dom";
import { GetMail } from "../Authentication/check-workspace-count";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SidebarWorkspaceMenu({ workSpaceRef, workspace }) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const token = Cookies.get("csrftoken");
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const [mail, setMail] = useState("");
  // const userId = useUserIdStore((state) => state.userId);
  const addWorkSpaceBtn = () => {
    navigate(`/create-workspace/${userId}`);
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const BringMail = async () => {
    const response = await GetMail(userId, token);
    setMail(response.mail);
  };

  useEffect(() => {
    BringMail();
  }, []);

  return (
    <>
      <div ref={workSpaceRef} className="workSpaceMenu">
        <div className="userMail">{mail}</div>
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
          <div className="createWorkSpaceButton" onClick={addWorkSpaceBtn}>
            Create WorkSpace
          </div>
          <div className="signOutButton" onClick={logout}>
            Sign Out
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarWorkspaceMenu;
