import React, { useEffect } from "react";
import TopNav from "../components/TopNav";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

const CoursesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <TopNav />
      <h1 style={{ marginLeft: "110px" }}>Courses</h1>
    </div>
  );
};

export default CoursesPage;
