import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InstructorBtn = () => {
  const [hover, btnIshovered] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleMouseEnter = () => {};

  return (
    <div>
      {user && user.role && user.role.includes("Instructor") ? (
        <Link
          onMouseEnter={() => btnIshovered(true)}
          onMouseLeave={() => btnIshovered(false)}
          style={{
            color: hover ? "#28215f" : "#4e40bb",
            textDecoration: "none",
          }}
          to="/"
        >
          Upload Course
        </Link>
      ) : (
        <Link
          onMouseEnter={() => btnIshovered(true)}
          onMouseLeave={() => btnIshovered(false)}
          style={{
            color: hover ? "#28215f" : "#4e40bb",
            textDecoration: "none",
          }}
          to="/instructor"
        >
          Teach on Idemy
        </Link>
      )}
    </div>
  );
};

export default InstructorBtn;
