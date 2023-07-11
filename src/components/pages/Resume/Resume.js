//Imports
import React from "react";
// import resume1 from "../../../images/resume1.png"
// import resume2 from "../../../images/resume2.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../Resumé.pdf";
import "./Resume.css";

// Function that renders the downloadable resume, proficiencies & exports
export default function Resume() {
  return (
    <Box>
      <div>
        <a
          href={PdfFile}
          download="Ryan Messett Resumé"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download My Resume
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "80px",
          }}
        >
          - HTML
          <br></br>- API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- MySQL, Sequelize
          <br></br>- MongoDB, Mongoose
          <br></br>- Bootstrap
          <br></br>- REST
          <br></br>- GraphQL
        </p>
      </div>
    </Box>

    // Below is another possible way of rendering my resume using screenshot images which I may choose to implement in the future

    // <Box sx={{ flexGrow: 1 }}>
    //   <div>
    //     <h1 style={{display: 'flex', justifyContent: 'center'}}>My Resume</h1>
    //     <img
    //       src={resume1}
    //       alt="Resume"
    //       style={{
    //         width: "-webkit-fill-available",
    //         height: "auto",
    //         paddingLeft: "350px",
    //         paddingRight: "350px",
    //       }}
    //     />
    //     <br></br>
    //     <img
    //       src={resume2}
    //       alt="Resume"
    //       style={{
    //         width: "-webkit-fill-available",
    //         height: "auto",
    //         paddingLeft: "350px",
    //         paddingRight: "350px",
    //       }}
    //     />
    //   </div>
    // </Box>
  );
}
