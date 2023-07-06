import React from "react";
import resume1 from "../../images/resume1.png"
import resume2 from "../../images/resume2.png";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import PdfFile from "../../Resumé.pdf";
import "./Resume.css";

// function MyApp() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }

export default function Resume() {
  return (
    // <div>
    //   <h1>Resume</h1>
    //   <p>
    //     Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
    //     Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
    //     dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
    //     sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
    //     sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
    //     vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
    //     libero. Class aptent taciti sociosqu ad litora torquent per conubia
    //     nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
    //     lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    //     Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
    //     in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
    //     bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
    //     est ligula suscipit velit, sed bibendum turpis dui in sapien.
    //   </p>
    // </div>

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

    <Box>
      <div>
        <a
          href={PdfFile}
          download="MyResumé"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button className="pop-on-hover" style={{ backgroundColor: "#DB791A", color: "floralwhite" }}>
            Click Here to Download My Resume
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline"
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
            textDecoration: "underline"
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
  );
}
