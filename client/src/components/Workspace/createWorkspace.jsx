import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthStore, useUserIdStore } from "../../Authentication/auth-store";
import Cookies from "js-cookie";
import {
  AddWorkspace,
  CheckWorkSpaceCount,
} from "../../Authentication/check-workspace-count";
import toast from "react-hot-toast";

function CreateWorkspace() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const token = Cookies.get("csrftoken");
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  // const userId = useUserIdStore((state) => state.userId);
  // console.log(userId);

  const [formData, setFormData] = useState({
    workspaceName: "",
    workspaceDesc: "",
    userId: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const GoBackBtn = async () => {
    const workSpaceCount = await CheckWorkSpaceCount(userId, token);
    console.log(workSpaceCount);
    if (workSpaceCount.count == 0) {
      navigate("/create-workspace-alert");
    } else {
      navigate(`/home/${userId}`);
    }
  };

  const CreateWorkspaceBtn = async (e) => {
    e.preventDefault();
    try {
      if (token) {
        const createWorkSpaceResponse = await AddWorkspace(formData, token);
        console.log(createWorkSpaceResponse);
        if (createWorkSpaceResponse.status === "success") {
          toast.success(createWorkSpaceResponse.message);
          setIsLoggedIn(true);
          navigate("/");
        } else {
          toast.error(createWorkSpaceResponse.message);
        }
      } else {
        toast.error("Token not found");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="signupPageContainer">
        <div className="signup-container">
          <div className="signup-box">
            <h2>Create Workspace</h2>
            <form className="signupForm">
              <div className="input-group">
                <label>WorkSpace Name</label>
                <input
                  type="text"
                  name="workspaceName"
                  placeholder="Enter WorkSpace name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>WorkSpace Desc</label>
                <input
                  type="text"
                  name="workspaceDesc"
                  placeholder="Enter WorkSpace Desc"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="createWorkspacebtns">
                <div
                  className="create-workspace-btn"
                  onClick={CreateWorkspaceBtn}
                >
                  Create
                </div>
                <div className="go-back-btn" onClick={GoBackBtn}>
                  Go Back
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateWorkspace;
