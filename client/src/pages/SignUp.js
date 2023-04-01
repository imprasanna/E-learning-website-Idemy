import { Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import EmailInput from "../components/EmailInput";
import Logo from "../components/Logo";
import PasswordInput from "../components/PasswordInput";
import NameInput from "../components/NameInput";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { data } = await axios.post("http://localhost:8000/api/register");
    console.log("REGISTER RESPONSE", data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "2rem",
        }}
      >
        <Logo />
        <Typography
          sx={{
            fontFamily: "'Montserrat Alternates', sans-serif",
            marginTop: "1rem",
          }}
          variant="h4"
        >
          Hey There!
        </Typography>
        <p style={{ textAlign: "center" }}>
          Welcome to Idemy, hope you enjoy the learnings!
        </p>
        <NameInput />
        <EmailInput />
        <PasswordInput />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: "96%", height: "50px", marginTop: "2rem" }}
          color="success"
        >
          Sign Up
        </Button>
      </div>
      <div>
        <p style={{ fontSize: "0.9rem" }}>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", fontSize: "1rem" }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
