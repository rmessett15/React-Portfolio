// Imports
import React from "react";
import "./Navigation.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTab from "@mui/base/useTab";

const pages = ["About", "Portfolio", "Contact", "Resume"];

// Function that renders nav links and calls setCurrentPage allowing state to be changed
function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <ul
      className="nav nav-tabs"
      style={{ paddingRight: "35px", paddingTop: "22px" }}
    >
      <li className="nav-item">
        <a
          id="nav-link"
          href="#about"
          onClick={() => setCurrentPage("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#portfolio"
          onClick={() => setCurrentPage("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#Contact"
          onClick={() => setCurrentPage("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          id="nav-link"
          href="#resume"
          onClick={() => setCurrentPage("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>

    // Below is an in progress new navbar -> the code below gives functionality to the nav links/buttons

    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     display: { xs: "none", md: "flex" },
    //     justifyContent: { md: "end" },
    //   }}
    // >
    //   {pages.map((page) => (
    //     <Button
    //       key={page}
    //       onClick={() => {
    //         setCurrentPage(page);
    //         handleCloseNavMenu();
    //       }}
    //       sx={{ my: 2, color: "#EBDFCC", display: "block" }}
    //     >
    //       {page}
    //     </Button>
    //   ))}
    // </Box>
  );
}

// Export
export default Navigation;
