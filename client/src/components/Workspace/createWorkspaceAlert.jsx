import { useNavigate } from "react-router-dom";

function CreateWorkspaceAlert() {
  const navigate = useNavigate();

  const CreateWorkspaceBtn = () => {
    navigate("/create-workspace");
  };

  const GoBackBtn = () => {
    navigate("/");
  };
  return (
    <>
      <div className="signupPageContainer">
        <div className="signup-container">
          <div className="signup-box">
            <h2>Create Workspace Alert</h2>
            <h4>
              Please First create the workspace then it will navigate to home
              page
            </h4>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateWorkspaceAlert;
