import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const Navbar = () => {
  return (
    <header className="header-component fixed-top">
      <div className="navcenter">
        <div id="logo">
          <h3>Incubyte</h3>
        </div>
        <nav id="navbar">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={100}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="expertise-content"
                smooth={true}
                duration={100}
              >
                Our Expertise
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="stories-content"
                smooth={true}
                duration={100}
              >
                Sucess Stories
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={100}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
