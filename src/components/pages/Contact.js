import React from "react";
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/material";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Contact Me
        </h1>
      </div>
      <form style={{ display: "flex", justifyContent: "center" }}>
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
            <TextField id="outlined-basic" label="Message" variant="outlined" />
            {/* <TextareaAutosize /> */}
          </MenuItem>
          <MenuItem style={{ justifyContent: "center" }}>
            <Button className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
              style={{
                backgroundColor: "#DB791A",
                color: "#EBDFCC",
              }}
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
}

// <div>
//   <h1>Contact</h1>
//   <form>
//     <Stack spacing={2}>
//       <MenuItem>
//         <TextField id="outlined-basic" label="Name" variant="outlined" />
//       </MenuItem>
//       <MenuItem>
//         {" "}
//         <TextField
//           id="outlined-basic"
//           label="Email Address"
//           variant="outlined"
//         />
//       </MenuItem>
//       <MenuItem>
//         <TextField id="outlined-basic" label="Message" variant="outlined" />
//         {/* <TextareaAutosize /> */}
//       </MenuItem>
//       <MenuItem>
//         <Button xs={{width: "100%"}} variant="contained">Submit</Button>
//       </MenuItem>
//     </Stack>
//   </form>
// </div>

// <div style={{ display: "flex", justifyContent: "center" }}>
//   <iframe
//     src="https://docs.google.com/forms/d/e/1FAIpQLScysYfJHsIA9Wvf5bYfiF_yPb5QtSX9wwZCdlxV42WoCxT_tQ/viewform?embedded=true"
//     width="640"
//     height="678"
//     frameborder="0"
//     marginheight="0"
//     marginwidth="0"
//   >
//     Loading…
//   </iframe>
// </div>;
