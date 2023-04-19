import React from "react";
import { useSelector } from "react-redux";

const InstructorBtn = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {user && user.role && user.role.includes("Instructor") ? (
        <div style={{ color: "#32297c" }}>Upload course</div>
      ) : (
        <div style={{ color: "#32297c" }}>Teach on Idemy</div>
      )}
    </div>
  );
};

export default InstructorBtn;
