import React, { useState } from "react";
import logo from "../assets/Idemy-logo.png";
import { Paper } from "@mui/material";
import "../TopNav.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { resetNav } from "../store/slices/navStateSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopNav = () => {
  const [searchIcon, renderSearchIcon] = useState(false);
  const [searchFocusOutline, renderFocusOutline] = useState(false);
  const [translation, translateBox] = useState(false);
  const [loginHover, loginButtonIsHovered] = useState(false);
  const [signUpHover, signUpButtonIsHovered] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleClick = () => {
    dispatch(resetNav());
    navigate("/");
  };

  return (
    <div>
      <div className="body" style={{ marginLeft: "110px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            onClick={handleClick}
            style={{
              userSelect: "none",
              cursor: "pointer",
            }}
            width="120px"
            src={logo}
            alt="Idemy logo"
          />
          <Paper
            sx={{
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

          {user === null ? (
            <div className="buttons" style={{ marginRight: "2rem" }}>
              <Link to="/login">
                <Button
                  sx={{ background: "#fcc17a" }}
                  startIcon={<LoginIcon />}
                  onMouseEnter={() => loginButtonIsHovered(true)}
                  onMouseLeave={() => loginButtonIsHovered(false)}
                  color="success"
                  variant={loginHover ? "outlined" : "contained"}
                >
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button
                  sx={{ background: "#fcc17a", marginLeft: "1rem" }}
                  startIcon={<PersonAddIcon />}
                  onMouseEnter={() => signUpButtonIsHovered(true)}
                  onMouseLeave={() => signUpButtonIsHovered(false)}
                  color="success"
                  variant={signUpHover ? "outlined" : "contained"}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div style={{ marginRight: "2rem" }}>{user.name}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
