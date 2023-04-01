import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NameInput = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-email">Fullname</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircleIcon />
            </InputAdornment>
          }
          label="Fullname"
        />
      </FormControl>
    </Box>
  );
};

export default NameInput;
