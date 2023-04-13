import React, { useState } from "react";
import logo from "../assets/Idemy-logo.png";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import "../TopNav.css";
import SearchIcon from "@mui/icons-material/Search";
// import LoginIcon from "@mui/icons-material/Login";

const TopNav = () => {
  const [searchIcon, renderSearchIcon] = useState(false);
  const [searchFocusOutline, renderFocusOutline] = useState(false);
  const [translation, translateBox] = useState(false);

  const handleFocus = () => {
    renderSearchIcon(true);
    renderFocusOutline(true);
    translateBox(true);
  };

  const handleBlur = () => {
    renderSearchIcon(false);
    renderFocusOutline(false);
    translateBox(false);
  };

  return (
    <div>
      <div className="body" style={{ marginLeft: "110px" }}>
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              style={{ userSelect: "none" }}
              width="120px"
              src={logo}
              alt="Idemy logo"
            />
          </Link>
          <Paper
            sx={{
              marginLeft: "8rem",
              display: "flex",
              alignItems: "center",
              color: "#c2c1d4",
              borderRadius: "20px",
              outline: searchFocusOutline ? "2px solid #a8a8e6" : "none",
              transform: translation ? "translateX(-34px)" : "none",
            }}
            elevation={0}
          >
            <SearchIcon
              sx={{
                paddingLeft: "15px",
                display: searchIcon ? "inline" : "none",
              }}
            />
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search here..."
              className="search-box"
              type="text"
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
