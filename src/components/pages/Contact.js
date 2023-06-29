import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Message" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  );
}
