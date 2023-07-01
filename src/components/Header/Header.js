import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css';

export default function Header ({currentPage, setCurrentPage}) {
    return (
      <div className="headerParent">
        <p id="header-text">RYAN MESSETT</p>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    );
}
