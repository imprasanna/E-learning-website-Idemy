import { Button, Typography } from "@mui/material";
import React from "react";
import EmailInput from "../components/EmailInput";
import Logo from "../components/Logo";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";

const Login = () => {
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
          Hello Again!
        </Typography>
        <p style={{ textAlign: "center" }}>
          Welcome to Idemy, hope you enjoy the learnings!
        </p>
        <EmailInput />
        <PasswordInput />
        <p
          style={{
            color: "blue",
            cursor: "pointer",
            width: "40%",
            textAlign: "right",
            alignSelf: "flex-end",
            paddingRight: "1.5rem",
            marginTop: 0,
            marginBottom: "3rem",
            fontSize: "0.9rem",
          }}
        >
          Forgot password?
        </p>
        <Button
          variant="contained"
          sx={{ width: "96%", background: "#e07dd1", height: "50px" }}
        >
          Login
        </Button>
      </div>
      <div>
        <p style={{ fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <Link
            style={{ textDecoration: "none", fontSize: "1rem" }}
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
