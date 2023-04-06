import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import EmailInput from "../components/EmailInput";
import Logo from "../components/Logo";
import PasswordInput from "../components/PasswordInput";
import NameInput from "../components/NameInput";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      toast.success("Signed Up Successfully!!");
    } catch (err) {
      toast.error(err.response.data);
    }
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
      <ToastContainer position="top-center" />
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
        <NameInput name={name} setName={setName} />
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
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
