import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const TopNavRight = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fullName = user.name;
    const firstLetter = fullName.charAt(0);
    const lastLetter = fullName.charAt(fullName.indexOf(" ") + 1);
    const nameLetters = `${firstLetter}${lastLetter}`;
  }, [user]);

  const fullName = user.name;
  const firstLetter = fullName.charAt(0);
  const lastLetter = fullName.charAt(fullName.indexOf(" ") + 1);
  const nameLetters = `${firstLetter}${lastLetter}`;

  return (
    <div>
      <div
        style={{
          marginRight: "2rem",
          display: "flex",
          alignItems: "center",
          color: "#32297c",
          fontSize: "0.9rem",
        }}
      >
        <div
          style={{
            background: "#fcc17a",
            borderRadius: "100%",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
            color: "white",
            fontSize: "0.8rem",
            letterSpacing: "0.1rem",
            marginRight: "0.5rem",
            fontWeight: 600,
            outline: "2px solid #e6a657",
            outlineOffset: "1px",
            userSelect: "none",
          }}
        >
          {nameLetters}
        </div>
        {fullName}
      </div>
    </div>
  );
};

export default TopNavRight;
