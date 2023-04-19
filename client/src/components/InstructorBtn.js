import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InstructorBtn = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {user && user.role && user.role.includes("Instructor") ? (
        <Link to="/instruction">
          <div style={{ color: "#32297c" }}>Upload course</div>
        </Link>
      ) : (
        <div style={{ color: "#32297c" }}>Teach on Idemy</div>
      )}
    </div>
  );
};

export default InstructorBtn;
