import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "50%",
        background: "#e07dd1",
        border: "7px solid #8fdd8f",
      }}
    >
      <Typography
        sx={{
          fontFamily: "cursive",
          color: "white",
          fontWeight: "500",
        }}
        variant="h4"
      >
        |I|
      </Typography>
    </div>
  );
};

export default Logo;
