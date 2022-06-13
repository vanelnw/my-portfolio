import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import react from "../../assets/react.png";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaDownload, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import yaba from '../../assets/yaba2.png'
import cv from '../../assets/CV-Nwaba Vanel.pdf'

const Header = () => {
  return (
    <div className="main">
      <div id="home" className="app__container section  app__flex">
        <div className="app__header ">
          <div className="app__header-info ">
            <h2 className="head-text rainbow-text">Hello, I am Vanel Nwaba</h2>
            <h3 className="medium-text">Frontend Web Developer</h3>
            <p className="p-text">
              Experienced in web design and development, I create stunning
              websites for your business.
            </p>
            <p className="p-text">
              I code beautifully things and i love what i do.
            </p>

            <div className="app__header-icons">
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
                href="https://web.facebook.com/vanel.nwaba.1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/vanelnw"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="#contact" className="button">
                let's talk
              </a>
              <a href={cv} download className="button">
                download cv <FaDownload />
              </a>
            </div>
          </div>

          <div className="app__header-logo app__flex">
            <motion.div className="app__header-hover-show app__flex">
              <span className="circle">
                <img src={react} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.redux} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.css} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.sass} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.javascript} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.typescript} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.node} alt="profile_bg" />
              </span>
              <span className="circle">
                <img src={images.html} alt="profile_bg" />
              </span>
            </motion.div>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__header-img app__flex"
            >
              <img src={yaba} alt="profile_bg" />
              <motion.img
                whileInView={{ scale: [0, 1.1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
