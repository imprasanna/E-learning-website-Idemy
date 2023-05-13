import { Button } from "@mui/material";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const InstructorPage = () => {
  const handleClick = async (ev) => {
    ev.preventDefault();

    // const token = document.cookie
    // .split(';')
    // .map(cookie => cookie.trim())
    // .find(cookie => cookie.startsWith('token='))
    // ?.split('=')[1];

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/make-instructor`,
        {},
        {
          withCredentials: true,
          // headers: {
          //   Authorization: `Bearer ${token}`
          // }
        }
      ); // The second object argument is empty because we need not send or pass or write any data in the request body
      // Also the third argument where there is: "withCredentials: true", specifies that we need to send cookies with request for authentication process
      console.log(response);
    } catch (err) {
      toast.error("An Error Occured. Try Again!");
      console.log(err);
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <div>Let's start changing the lives of students!</div>
      <Button variant="contained" onClick={handleClick}>
        Get Started
      </Button>
    </div>
  );
};

export default InstructorPage;
