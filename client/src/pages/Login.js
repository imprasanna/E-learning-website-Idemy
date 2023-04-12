import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import EmailInput from "../components/EmailInput";
import Logo from "../components/Logo";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        {
          email,
          password,
        }
      );
      console.log("LOGIN RESPONSE", data);
      toast.success("Logged In Successfully!!");
      setLoading(false);
      // dispatch the login data to the redux store
      dispatch(login(data));
      // save in local storage
      // localStorage.setItem("user", JSON.stringify(data));
      // navigate("/");
    } catch (err) {
      toast.error(err.response.data);
      console.log(err);
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
          onKeyDown={handleKeyDown}
          onClick={handleSubmit}
          variant="contained"
          sx={{ width: "96%", background: "#e07dd1", height: "50px" }}
          disabled={!email || !password || loading}
        >
          {loading ? <CircularProgress size="1.5rem" /> : "Submit"}
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
