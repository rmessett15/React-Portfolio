// Imports
import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

// Function that renders selected page state & exports
export default function PortfolioContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "About") {
    return <About />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
  return <Portfolio />;
}
