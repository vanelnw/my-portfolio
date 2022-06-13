import React from "react";
import "./Clients.scss";
import { motion } from "framer-motion";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Ssn from "../../assets/ssn.png";
import Luxsoft from "../../assets/luxsoft.png";
import Pnlp from "../../assets/Pnlp.png";

const Clients = () => {
  return (
    <div id="client" className="app__container app__flex">
      <h2 className="section-title-01">Clients</h2>
      <h2 className="section-title-02">Clients</h2>
      <div className="app__client">
        <div className="app__client-left app__flex">
          <h2 className="head-text">
            Works for All these <br />
            <span> Brands & Clients</span>
          </h2>
          <span className="p-text">
            For more than 2 years, I have been accomplishing enough with modern
            web development, new generation web and app programing language.
          </span>

          <a href="#contact" className="button s-button">
            Hire Me
          </a>
        </div>
        <div className="app__client-right app__flex">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="client-mainCircle app__flex"
          >
            <div>
              <img src={Upwork} alt="" />
            </div>
            <div>
              <img src={Fiverr} alt="" />
            </div>
            <div>
              <img src={Ssn} alt="" />
            </div>
            <div>
              <img src={Pnlp} alt="" />
            </div>
            <div>
              <img src={Luxsoft} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
