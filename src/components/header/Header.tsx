import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  let [click, setClick] = useState(false);
  let [headerClass, setHeaderClass] = useState("Header");

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 73) {
      return setHeaderClass("Header");
    } else if (window.scrollY > 70) {
      return setHeaderClass("Header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };

  const onResumeClick = () => {
    setClick(!click);
    window.open("https://www.docdroid.net/54t4Pkk/gal-aviv-cv-pdf", "_blank", "noreferrer");;
  };

  

  function scrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className={headerClass}>
      <div className="logo-container">
        <div className="logo">
          <Link
            to="/"
            className="header-logo"
            spy={true}
            smooth={true}
            onClick={() => scrollToTop()}
          >
            Gal <span className="colored-logo-part">Aviv</span>
          </Link>
        </div>
        <div className="logo-img">
          <img
            className="my-picture"
            src="images/profile-images/profile-picture.png"
            alt=""
          />
        </div>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            spy={true}
            smooth={true}
            onClick={() => {
              scrollToTop();
              handleClick();
            }}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="skills-section"
            className="nav-link"
            spy={true}
            smooth={true}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects-section"
            className="nav-link"
            spy={true}
            smooth={true}
            onClick={handleClick}
          >
            My Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            spy={true}
            smooth={true}
            onClick={() => onResumeClick()}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="footer-section"
            className="nav-link"
            spy={true}
            smooth={true}
            onClick={() => handleClick()}
          >
            Contact Me
          </Link>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Header;
