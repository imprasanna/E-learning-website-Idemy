import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import NameInput from "../components/NameInput";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import logo from "../assets/Idemy.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_API_URL}/register`, {
        name,
        email,
        password,
      });
      toast.success("Signed Up Successfully!!");
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      handleSubmit(ev);
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
        <Link to="/">
          <img width="80px" src={logo} alt="Idemy logo" />
        </Link>
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
        <NameInput
          name={name}
          setName={setName}
          handleKeyDown={handleKeyDown}
        />
        <EmailInput
          email={email}
          setEmail={setEmail}
          handleKeyDown={handleKeyDown}
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          handleKeyDown={handleKeyDown}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: "96%", height: "50px", marginTop: "2rem" }}
          color="success"
          disabled={!name || !email || !password || loading}
        >
          {loading ? <CircularProgress size="1.5rem" /> : "Submit"}
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
