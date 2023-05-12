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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

const SignUp = () => {
  const [name, setName] = useState("");
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
        `${process.env.REACT_APP_API_URL}/register`,
        {
          name,
          email,
          password,
        }
      );
      // console.log("LOGIN SIGNUP RESPONSE", data.user);
      // save in local storage
      localStorage.setItem("user", JSON.stringify(data.user));
      // navigate to homepage after successful login through signup
      navigate("/");
      // dispatch the login data to the redux store
      dispatch(login(data.user));
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
          {loading ? <CircularProgress size="1.5rem" /> : "Sign Up"}
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
