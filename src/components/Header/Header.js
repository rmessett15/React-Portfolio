import React from "react";
import Navigation from "../Navigation/Navigation";
import './Header.css';

export default function Header ({currentPage, setCurrentPage}) {
    return (
      <div className="headerParent" style={{padding: '0px', paddingLeft: '43px'}}>
        <p id="header-text">RYAN MESSETT</p>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    );
}
