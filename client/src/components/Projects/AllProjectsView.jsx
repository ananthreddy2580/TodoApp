import SearchBar from "../ReusableComponents/SearchBar.jsx";
import { useState } from "react";

function AllProjects() {
  // Declarations
  const [query, setQuery] = useState("");

  // Functions
  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <div className="allProjectsPageContainer">
        <div className="topViewProjectsPageContainer">
          <div className="navBarName">Projects</div>
          <div className="searchProject">
            <div className="searchProject1">
              {/* <SearchBar /> */}
              <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
              />
            </div>
          </div>
          <div className="addProject">
            <div className="addButtonDiv1">Add Project</div>
          </div>
        </div>
        <div className="bottomViewProjectsContainer"></div>
      </div>
    </>
  );
}

export default AllProjects;
