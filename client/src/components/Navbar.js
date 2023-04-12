import React from "react";
import { Paper } from "@mui/material";
import logo from "../assets/Idemy-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100vw",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
        elevation={5}
      >
        <Link to="/">
          <img
            style={{
              paddingLeft: "2rem",
            }}
            width="130px"
            src={logo}
            alt="Idemy-logo"
          />
        </Link>
      </Paper>
    </>
  );
};

export default Navbar;
