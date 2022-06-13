import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../../assets/myLogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [navbarActive, setNavbarActive] = useState(false);

  const showOnScroll = () => {
    if (window.scrollY >= 670) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };
  const activeNavigationItem = () => {
    const sections = document.querySelectorAll(".section");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.${id}`).classList.add("active");
      } else {
        document.querySelector(`.${id}`).classList.remove("active");
      }
    });
  };
  window.addEventListener("scroll", showOnScroll);
  window.addEventListener("scroll", activeNavigationItem);

  return (
     <div className={navbarActive ? "app__navbar active" : "app__navbar"}>
      <div className="nav-container app__flex">
        <div className="app__navbar-logo">
          <img src={logo} alt="vanel" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "skills", "work", "testimonials", "contact"].map(
            (item, i) => (
              <li
                key={i}
                className={
                  item !== "home"
                    ? `nav-items ${item} app__flex p-text`
                    : `nav-items ${item} app__flex p-text active`
                }
              >
                <div />
                <a href={`#${item}`} className="">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {[
                  "home",
                  "about",
                  "skills",
                  "work",
                  "testimonials",
                  "contact",
                ].map((item, i) => (
                  <li key={i} className="app__flex p-text">
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
     </div>
     </div>
  );
};

export default Navbar;
