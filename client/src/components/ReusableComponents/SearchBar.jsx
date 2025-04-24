import {
  TextField,
  InputAdornment,
  IconButton,
  tableBodyClasses,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
// import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ query, setQuery, onSearch }) {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // onSearch();
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    e.preventDefault();
    onSearch();
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSearch} className="searchbar-form">
        <TextField
          variant="outlined"
          className="searchbarInputField"
          value={query || ""}
          onChange={handleInputChange}
          placeholder="Search..."
          fullWidth
          autoComplete="off"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: query && (
              <InputAdornment position="end">
                <IconButton onClick={handleClear}>
                  <ClearIcon sx={{ color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "none", // White background inside input
              color: "#333", // Text color
              borderRadius: "8px",
              width: "100%",
              fontSize: "18px",
              "& fieldset": {
                border: "none", // Removes the border
              },
              border: "1px solid rgba(255, 255, 255, 0.27)",
              "&:hover fieldset": {
                borderColor: "blue", // Change border color to blue on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "blue", // Change border color to blue when focused
                boxShadow: "0 0 10px 2px rgba(0, 0, 25, 0.3)", // Add shadow on focus
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#aaa", // Placeholder color
              opacity: 1, // Ensure placeholder color is visible
            },
          }}
        />
      </form>
    </div>
  );
}
export default SearchBar;
