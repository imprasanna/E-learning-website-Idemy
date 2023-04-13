import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CoursesPage from "./pages/CoursesPage";
import MaterialsPage from "./pages/MaterialsPage";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./store/slices/authSlice";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(login(JSON.parse(localStorage.getItem("user"))));
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
      </Routes>
    </>
  );
}

export default App;
