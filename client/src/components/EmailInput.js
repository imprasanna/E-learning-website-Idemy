import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const EmailInput = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            endAdornment={
              <InputAdornment position="end">
                <AlternateEmailIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default EmailInput;
