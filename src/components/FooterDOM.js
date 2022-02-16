import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./../styles/FooterDOM.css";

function FooterDOM() {
  return (
    <footer>
      <p>(MIT) Hero Programmers Community, 2022</p>
      <a href="https://github.com/HeroProgrammers/">
        <FontAwesomeIcon icon={faCheck} />
        &nbsp;&nbsp;Join us on GitHub!
      </a>
    </footer>
  );
}

export default FooterDOM;
