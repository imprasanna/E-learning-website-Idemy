import React from "react";
import { Paper } from "@mui/material";
import logo from "../assets/Idemy-logo-nav.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "../Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setHomeTrue,
  setHomeFalse,
  setCoursesFalse,
  setCoursesTrue,
  setMaterialsFalse,
  setMaterialsTrue,
  resetNav,
} from "../store/slices/navStateSlice";
import { logout } from "../store/slices/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  // const [home, makeHomeActive] = useState(true);
  // const [courses, makeCoursesActive] = useState(false);
  // const [materials, makeMaterialsActive] = useState(false);

  function homeIsActive() {
    dispatch(setHomeTrue());
    dispatch(setMaterialsFalse());
    dispatch(setCoursesFalse());
    // makeHomeActive(true);
    // makeCoursesActive(false);
    // makeMaterialsActive(false);
  }

  function coursesIsActive() {
    dispatch(setCoursesTrue());
    dispatch(setHomeFalse());
    dispatch(setMaterialsFalse());
    // makeCoursesActive(true);
    // makeHomeActive(false);
    // makeMaterialsActive(false);
  }

  function materialsIsActive() {
    dispatch(setMaterialsTrue());
    dispatch(setHomeFalse());
    dispatch(setCoursesFalse());
    // makeMaterialsActive(true);
    // makeHomeActive(false);
    // makeCoursesActive(false);
  }

  const { home, courses, materials } = useSelector((state) => state.navState);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleHomeClick = () => {
    homeIsActive();
    navigate("/");
  };

  const handleCoursesClick = () => {
    coursesIsActive();
    navigate("/courses");
  };

  const handleMaterialsClick = async () => {
    materialsIsActive();
    navigate("/materials");
  };

  const handleLogout = () => {
    // perform three actions:
    // 1. Dispatch the logout acion to global store
    // 2. Clear the local storage data of the user in browser
    // 3. Read the data from logout API to return status code and response message

    dispatch(logout());
    localStorage.removeItem("user");
    // const { data } = axios.post(`${process.env.REACT_APP_API_URL}/logout`);
    // console.log(data);
    axios.post(`${process.env.REACT_APP_API_URL}/logout`);
    dispatch(resetNav());
    navigate("/");
    toast.success("Logged out!!");
  };

  return (
    <>
      <ToastContainer position="top-center" />
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
            className={`home-icon ${home ? "active" : ""}`}
          >
            <HomeIcon
              sx={{
                color: home ? "#ffc37c" : "white",
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
                display: home ? "none" : "block",
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
            className={`courses-icon ${courses ? "active" : ""}`}
          >
            <LocalLibraryIcon
              sx={{
                color: courses ? "#ffc37c" : "white",
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
                display: courses ? "none" : "block",
              }}
            >
              Courses
            </p>
          </div>
          <div
            onClick={handleMaterialsClick}
            style={{ textDecoration: "none", cursor: "pointer" }}
            className={`materials-icon ${materials ? "active" : ""}`}
          >
            <LibraryBooksIcon
              sx={{
                color: materials ? "#ffc37c" : "white",
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
                display: materials ? "none" : "block",
              }}
            >
              Materials
            </p>
          </div>
        </div>
        {user !== null ? (
          <div
            onClick={handleLogout}
            className="logout-icon"
            style={{ cursor: "pointer" }}
          >
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
        ) : (
          <div></div>
        )}
      </Paper>
    </>
  );
};

export default Navbar;
