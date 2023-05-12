import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import TopNav from "../components/TopNav";
import { login } from "../store/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <TopNav />
    </div>
  );
};

export default Home;
