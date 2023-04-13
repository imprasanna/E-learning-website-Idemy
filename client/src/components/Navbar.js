import React from "react";
import { Paper } from "@mui/material";
import logo from "../assets/Idemy-logo-nav.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          justifyContent: "center",
          paddingTop: "1rem",
        }}
      >
        <Link to="/">
          <img width="50px" src={logo} alt="Idemy-logo" />
        </Link>
      </Paper>
    </>
  );
};

export default Navbar;
