import React from "react";
import "./Footer.scss";
import { BsTwitter,BsGithub } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="footer-container">
        <div className="about group">
          <h2>Vanel</h2>
          <p>Front-end Developer</p>
          <a href="#about">About Me</a>
        </div>
        <div className="hr"></div>
        <div className="info group">
          <h3>More</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hr"></div>
        <div className="follow group">
          <h3>Follow</h3>
          <ul>
            <a
              href="https://twitter.com/VanelNw"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/va-nw/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.linkedin.com/in/va-nw/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/vanelnw?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </ul>
        </div>
      </div>

      <div className="footer-copyright group">
        <p>© 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
