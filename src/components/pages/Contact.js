import React from "react";
import { TextField } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/material";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form>
        <Stack spacing={2}>
          <MenuItem>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
          </MenuItem>
          <MenuItem>
            {" "}
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            {/* <TextField id="outlined-basic" label="Message" variant="outlined" /> */}
            <TextareaAutosize />
          </MenuItem>
          <MenuItem>
            <Button xs={{width: "100%"}} variant="contained">Submit</Button>
          </MenuItem>
        </Stack>
      </form>
    </div>
  );
}
