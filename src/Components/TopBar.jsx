import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMagnifyingGlass, faLocationDot, faPlus} from "@fortawesome/free-solid-svg-icons";
import {  faBookmark , faComment , faCircleUser } from "@fortawesome/free-regular-svg-icons";
import "./TopBar.css"; // Ensure you are importing the CSS file

function TopBar() {
  return (
    <div className="top-bar">
      {/* Left Section */}
      <div className="top-bar-left">
        {/* Logo */}
        <Link to="/">
          <img
            className="logo"
            src="https://c.animaapp.com/zLXIMVIQ/img/image-9@2x.png"
            alt="Logo"
          />
        </Link>

        {/* Location Frame */}
        <div className="location-frame">
          <FontAwesomeIcon className="location-icon" icon={faLocationDot} style={{color: "#765734"}} />
          <input
            className="zip-code-box"
            type="number"
            pattern="[0-9]{5}"
            inputMode="numeric"
            maxLength="5"
            defaultValue="19104"
          />
        </div>

        {/* Search Frame */}
        <div className="search-frame">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} size="xs" style={{color: "#765734"}} />
          <input className="search-box" type="text" placeholder="Search" />
        </div>
      </div>

      {/* Right Section */}
      <div className="icons-container">
        <FontAwesomeIcon className="icon" icon={faBookmark} style={{ color: "#ffffff" }} />
        <Link to="/chat">
          <FontAwesomeIcon className="icon" icon={faComment} style={{ color: "#ffffff" }} />
        </Link>
        <FontAwesomeIcon className="icon" icon={faPlus} style={{ color: "#ffffff" }} />
        <FontAwesomeIcon className="icon" icon={faCircleUser} style={{ color: "#ffffff" }} />
      </div>
    </div>
  );
}

export default TopBar;
