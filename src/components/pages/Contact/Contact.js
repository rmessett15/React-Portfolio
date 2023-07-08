import React, { useState } from "react";
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
// import { TextareaAutosize } from "@mui/material";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setName(value);
    if (name === "name") {
      if (value === "") {
        setName("");
        setErrorMessage(`Please enter a name. This field is required.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

  const validateEmail = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setEmail(value);
    if (name === "email") {
      if (value === "") {
        setEmail("");
        setErrorMessage(`Please enter a valid email address. This field is required.`);
      }
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      console.log(!pattern.test(value));
      if (!pattern.test(value)) {
        setErrorMessage(`Please enter a valid email`);
      } else {
        setErrorMessage('');
      }
    }
    // if (value.length > 0) {
    //   setErrorMessage(``);
    // }
  };

  const validateMessage = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setMessage(value);
    if (name === "message") {
      if (value === "") {
        setMessage("");
        setErrorMessage(`Please enter a message. This field is required.`);
      }
    }
    if (value.length > 0) {
      setErrorMessage(``);
    }
  };

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
            <TextField
              value={name}
              onChange={validateName}
              id="outlined-basic"
              fullWidth
              label="Name"
              name="name"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
            />
          </MenuItem>
          <MenuItem>
            {" "}
            <TextField
              value={email}
              onChange={validateEmail}
              id="outlined-basic"
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
            />
          </MenuItem>
          <MenuItem>
            <textarea
              value={message}
              onChange={validateMessage}
              rows="15"
              cols="40"
              id="outlined-basic"
              label="Message"
              name="message"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "floralwhite" }}
              placeholder="Type your message here!"
            />
            {/* <TextareaAutosize /> */}
          </MenuItem>
          {errorMessage && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem style={{ justifyContent: "center" }}>
            <Button
              id="contact-button"
              className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
}

// function checkForm(form) {
//   // validation fails if the input is blank
//   if (form.inputfield.value == "") {
//     alert("Error: Input is empty!");
//     form.inputfield.focus();
//     return false;
//   }

//   // regular expression to match only alphanumeric characters and spaces
//   var re = /^[\w ]+$/;

//   // validation fails if the input doesn't match our regular expression
//   if (!re.test(form.inputfield.value)) {
//     alert("Error: Input contains invalid characters!");
//     form.inputfield.focus();
//     return false;
//   }

//   // validation was successful
//   return true;
// }

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
