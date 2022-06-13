import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const showOnScroll = () => {
    if (window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", showOnScroll);
  return (
    <div className="scrollToTop-content">
      <a
        href="#home"
        className={
          show
            ? "scrollToTop-btn app__flex active"
            : "scrollToTop-btn app__flex"
        }
      >
        <AiOutlineArrowUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
