import React from "react";
import { Link } from "react-router-dom";
import "./../styles/NavbarDOM.css";
import logogif from "./../assets/logo.gif";

function NavbarDOM(props) {
  return (
    <nav>
      <div className="navbar-header">
        <img src={logogif} alt="logo" className="logo" />
        <Link to="/" className="navbar-brand" href="index.html">
          Hero Programmers
        </Link>
      </div>

      <div className="navbar-navigation">
        <Link
          to="/"
          className={
            props.activeTab === "home" ? "nav-link link-active" : "nav-link"
          }
        >
          Home
        </Link>
        <Link
          to="/members"
          className={
            props.activeTab === "members" ? "nav-link link-active" : "nav-link"
          }
        >
          Members
        </Link>
        <Link
          to="/projects"
          className={
            props.activeTab === "projects" ? "nav-link link-active" : "nav-link"
          }
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default NavbarDOM;
