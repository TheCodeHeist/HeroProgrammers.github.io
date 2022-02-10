import React from "react";
import { Link } from "react-router-dom";
import "./../styles/NavbarDOM.css";
import logogif from "./../assets/logo.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarDOM(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="top">
        <div className="navbar-header">
          <img src={logogif} alt="logo" className="logo" />
          <Link to="/" className="navbar-brand">
            Hero Programmers
          </Link>
        </div>

        <button type="button" className="navbar-toggler" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className={`navbar-navigation ${isNavOpen ? "nav-active" : ""}`}>
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
