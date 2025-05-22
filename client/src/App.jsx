// import { Routes, Route, useLocation } from "react-router-dom";
// import "./App.css";
// import { useState } from "react";
// import Sidebar from "./layouts/Sidebar.jsx";
// import Login from "./Authentication/Login.jsx";
// import Signup from "./Authentication/Signup.jsx";
// import Forgot from "./Authentication/ForgotPassword.jsx";
// import UpdatePassword from "./Authentication/UpdatePassword.jsx";
// import Home from "./components/home.jsx";
// import LandingHome from "./Landingpage/LandingHome.jsx";
// import LearnMore from "./Landingpage/LearnMore.jsx";
// import AllProjects from "./components/Projects/AllProjectsView.jsx";
// import Profile from "./components/profile.jsx";
// import { useAuthStore } from "./Authentication/auth-store.jsx";
// import { Toaster, toast } from "react-hot-toast";
// import CreateWorkspace from "./components/Workspace/createWorkspace.jsx";
// import CreateWorkspaceAlert from "./components/Workspace/createWorkspaceAlert.jsx";
// import { useParams } from "react-router-dom";

// // import CustomToast from "./components/Toast.jsx";

// function App() {
//   const location = useLocation();
//   const paths = ["/", "/home", "/Projects", "/profile"];
//   // const [isLoggedIn, setIsLoggedIn] = useState(false); // false by default
//   const { userId } = useParams();

//   console.log(userId);
//   const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

//   return (
//     <>
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           style: {
//             background: "#082e3d",
//             color: "white",
//             fontSize: "16px",
//             minWidth: "200px",
//           },
//         }}
//       />

//       {location.pathname.startsWith("/create-workspace") ||
//       location.pathname === "/create-workspace-alert" ? (
//         <div className="OutView">
//           <Routes>
//             <Route
//               path="/create-workspace/:userId"
//               element={<CreateWorkspace />}
//             />
//             <Route
//               path="/create-workspace-alert/:userId"
//               element={<CreateWorkspaceAlert />}
//             />
//           </Routes>
//         </div>
//       ) : isLoggedIn ? (
//         <div className="fullView">
//           {paths.some((path) => location.pathname.startsWith(path)) && (
//             <div className="leftView">
//               <Sidebar userId={userId} />
//             </div>
//           )}
//           <div className="rightView">
//             <Routes>
//               <Route path="/home/:userId" element={<Home />} />
//               {/* <Route path="/sign-in" element={<Login />} /> */}
//               <Route path="/projects" element={<AllProjects />} />
//               <Route path="/profile" element={<Profile />} />
//             </Routes>
//           </div>
//         </div>
//       ) : (
//         <div className="OutView">
//           <Routes>
//             <Route path="/" element={<LandingHome />} />
//             <Route path="/Learn-more" element={<LearnMore />} />
//             <Route path="/sign-up" element={<Signup />} />
//             <Route path="/sign-in" element={<Login />} />
//             <Route path="/forgot-password" element={<Forgot />} />
//             <Route
//               path="/reset-password/:uidb64/:token"
//               element={<UpdatePassword />}
//             />
//           </Routes>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

// Auth and Landing
import Login from "./Authentication/Login.jsx";
import Signup from "./Authentication/Signup.jsx";
import Forgot from "./Authentication/ForgotPassword.jsx";
import UpdatePassword from "./Authentication/UpdatePassword.jsx";
import LandingHome from "./Landingpage/LandingHome.jsx";
import LearnMore from "./Landingpage/LearnMore.jsx";

// Workspace
import CreateWorkspace from "./components/Workspace/createWorkspace.jsx";
import CreateWorkspaceAlert from "./components/Workspace/createWorkspaceAlert.jsx";

// Layouts for Logged-in Views
import LoggedInLayout from "./layouts/LoggedInLayout.jsx"; // New file

// Auth store
import { useAuthStore } from "./Authentication/auth-store.jsx";

function App() {
  const location = useLocation();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#082e3d",
            color: "white",
            fontSize: "16px",
            minWidth: "200px",
          },
        }}
      />

      {/* Special layout for workspace creation pages */}
      {location.pathname.startsWith("/create-workspace") ||
      location.pathname.startsWith("/create-workspace-alert") ? (
        <div className="OutView">
          <Routes>
            <Route
              path="/create-workspace/:userId"
              element={<CreateWorkspace />}
            />
            <Route
              path="/create-workspace-alert/:userId"
              element={<CreateWorkspaceAlert />}
            />
          </Routes>
        </div>
      ) : isLoggedIn ? (
        // Main app layout for logged-in users
        <Routes>
          <Route path="/home/:userId" element={<LoggedInLayout page="home" />} />
          <Route path="/projects/:userId" element={<LoggedInLayout page="projects" />} />
          <Route path="/profile/:userId" element={<LoggedInLayout page="profile" />} />
        </Routes>
      ) : (
        // Public routes for unauthenticated users
        <div className="OutView">
          <Routes>
            <Route path="/" element={<LandingHome />} />
            <Route path="/Learn-more" element={<LearnMore />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<UpdatePassword />}
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

