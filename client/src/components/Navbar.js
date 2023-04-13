import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import logo from "../assets/Idemy-logo-nav.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [isHomeActive, makeHomeActive] = useState(true);
  const [isCoursesActive, makeCoursesActive] = useState(false);
  const [isMaterialsActive, makeMaterialsActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    makeHomeActive(false);
    makeCoursesActive(false);
  }, [makeMaterialsActive]);

  useEffect(() => {
    makeMaterialsActive(false);
    makeHomeActive(false);
  }, [makeCoursesActive]);

  useEffect(() => {
    makeMaterialsActive(false);
    makeCoursesActive(false);
  }, [makeHomeActive]);

  const handleHomeClick = () => {
    makeHomeActive(true);
    // makeCoursesActive(false);
    // makeMaterialsActive(false);
    navigate("/");
  };

  const handleCoursesClick = () => {
    makeCoursesActive(true);
    // makeHomeActive(false);
    // makeMaterialsActive(false);
    navigate("/courses");
  };

  const handleMaterialsClick = () => {
    makeMaterialsActive(true);
    // makeHomeActive(false);
    // makeCoursesActive(false);
    navigate("/materials");
  };

  return (
    <>
      <Paper
        sx={{
          width: "85px",
          height: "95vh",
          display: "flex",
          background: "#32297c",
          borderRadius: "30px",
          position: "fixed",
          margin: "auto 0",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          flexDirection: "column",
        }}
      >
        <div>
          <Link to="/">
            <img width="50px" src={logo} alt="Idemy-logo" />
          </Link>
        </div>

        <div
          className="nav-items"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            onClick={handleHomeClick}
            style={{
              textDecoration: "none",
              marginBottom: "1.5rem",
              cursor: "pointer",
            }}
            className={`home-icon ${isHomeActive ? "active" : ""}`}
          >
            <HomeIcon
              sx={{
                color: isHomeActive ? "#ffc37c" : "white",
                fontSize: "1.5rem",
                width: "100%",
                textAlign: "center",
              }}
            />
            <p
              style={{
                margin: "1px",
                color: "white",
                fontSize: "0.65rem",
                width: "100%",
                textAlign: "center",
                userSelect: "none",
                display: isHomeActive ? "none" : "block",
              }}
            >
              Home
            </p>
          </div>
          <div
            onClick={handleCoursesClick}
            style={{
              textDecoration: "none",
              marginBottom: "1.5rem",
              cursor: "pointer",
            }}
            className={`courses-icon ${isCoursesActive ? "active" : ""}`}
          >
            <LocalLibraryIcon
              sx={{
                color: isCoursesActive ? "#ffc37c" : "white",
                fontSize: "1.5rem",
                width: "100%",
                textAlign: "center",
              }}
            />
            <p
              style={{
                margin: "1px",
                color: "white",
                fontSize: "0.65rem",
                width: "100%",
                textAlign: "center",
                userSelect: "none",
                display: isCoursesActive ? "none" : "block",
              }}
            >
              Courses
            </p>
          </div>
          <div
            onClick={handleMaterialsClick}
            style={{ textDecoration: "none", cursor: "pointer" }}
            className={`materials-icon ${isMaterialsActive ? "active" : ""}`}
          >
            <Link to="/materials">
              <LibraryBooksIcon
                sx={{
                  color: isMaterialsActive ? "#ffc37c" : "white",
                  fontSize: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              />
              <p
                style={{
                  margin: "1px",
                  color: "white",
                  fontSize: "0.65rem",
                  width: "100%",
                  textAlign: "center",
                  userSelect: "none",
                  display: isMaterialsActive ? "none" : "block",
                }}
              >
                Materials
              </p>
            </Link>
          </div>
        </div>

        <div className="logout-icon" style={{ cursor: "pointer" }}>
          <LogoutIcon
            sx={{
              color: "white",
              fontSize: "1.5rem",
              width: "100%",
              textAlign: "center",
            }}
          />
          <p
            style={{
              margin: "1px",
              color: "white",
              fontSize: "0.65rem",
              width: "100%",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            Logout
          </p>
        </div>
      </Paper>
    </>
  );
};

export default Navbar;
