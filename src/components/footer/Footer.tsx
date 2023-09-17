import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div id="footer-section" className="Footer">
      <div className="footer-heading">
        <h2>Get In Touch</h2>
      </div>
      <div className="link-icons">
        <Link
          className="social-icon-link linkedin"
          to="https://www.linkedin.com/in/gal-aviv-profile/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </Link>

        <Link
          className="social-icon-link github"
          to="https://github.com/Galaviv15?tab=repositories"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </Link>
        <Link
          onClick={() => (window.location.href = "mailto:galaviv15@gmail.com")}
          className="social-icon-link gmail"
          to="/"
          target="_blank"
          aria-label="Gmail"
        >
          <HiOutlineMail />
        </Link>
        <Link
          className="social-icon-link whatsapp"
          to="https://wa.me/+972526186222"
          target="_blank"
          aria-label="Whatsapp"
        >
          <FaWhatsapp />
        </Link>
        <Link
          className="social-icon-link instagram"
          to="https://www.instagram.com/galaviv_15/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </Link>
      </div>
      <div className="website-copyright">
        <p className="copyright">
          Gal Aviv <span className="current-year">©{currentYear}</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
