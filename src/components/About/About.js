import React, { useState } from 'react'
import './About.scss'
import { images } from "../../constants";
import { motion } from 'framer-motion'
import ServiceModal from './ServiceModal';
import { BsArrowRight } from 'react-icons/bs';
import { GiNotebook } from "react-icons/gi";
import { DiResponsive } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
import { FaCode, FaDownload } from 'react-icons/fa';
import cv from '../../assets/CV-Nwaba Vanel.pdf'

const services = [
  {
    title: "UI/UX Consultancy",
    icon: <DiResponsive size={40} />,
    img: images.about01,
    desc: "create digiital product with unique ideas",
    projects: 20,
  },
  {
    title: "Web Programming",
    icon: <FaCode size={20} />,
    img: images.about02,
    desc: "Multi-language, bespoke web programming and software solutions to end customers, across home, work and mobile platforms.",
    projects: 20,
  },
  {
    title: "Web Design",
    icon: <MdDesignServices size={20} />,
    img: images.about03,
    desc: "Eye catching and mobile friendly (responsive) bespoke professional web design services for any size of business or individual.",
    projects: 20,
  },
  {
    title: "Content Writing",
    icon: <GiNotebook size={20} />,
    img: images.about03,
    desc: "Intelligent, concise and engaging copy that’s beautifully written, bang on schedule and to budget.",
    projects: 20,
  },
];

const modalInfos = [
  {
    title: "UI/UX Consultancy",
    subtitle: "What is UX Consulting ?",
    desc: "UX consulting helps companies improve their product's overall usabiliity and optiimize expenses by implementing the right UX processes, methods, and tools.",
    provide: [
      "Establish the right Ux processes",
      "Create exceptional user experiences",
      "Discover new  business opportunities",
      "Save resources",
    ],
  },

  {
    title: "Web Programming",
    subtitle: "What is web Development ?",
    desc: "Web development services are used to design, build, support, and evolve all types of web-based software.",
    provide: ["Web application development", "Testing", "Maintenance"],
  },

  {
    title: "Web Design",
    subtitle: "What is Web Design ?",
    desc: "Web design consisted of a very basic markup language that included some formatting options, and the unique ability to link pages together using hyperlinks.",
    provide: [
      "Logo Design",
      "Graphic Design",
      "Ad Design",
      "Search Engine Optimization (SEO)",
    ],
  },

  {
    title: "Content Writing",
    subtitle: "What is Content Writing ?",
    desc: "Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.",
    provide: [
      "Web content writing",
      "Blog writing for websites",
      "Social media content",
    ],
  },
];

const About = () => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const hadleClick = (title) => {
    setModalInfo(modalInfos.filter((x) => x.title === title));
    setOpen(true);
  }
 
  return (
    <div id="about" className="section ">
      <div className="app__wrapper app__flex ">
        <h2 className="section-title-01">
          Get to nkow <span>About me</span>
        </h2>
        <h2 className="section-title-02">
          Get to nkow <span>About me</span>
        </h2>
        <div className="app__about app__flex">
          <div className="app__about-left ">
            <div className="app__about-cards">
              {services.map((item, i) => (
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  className="app__about-card"
                  key={i}
                >
                  <div className="card-title">
                    <span>{item.title}</span>
                    {item.icon}
                  </div>
                  <p>{item.desc}</p>
                  <div className="learn-more-btn" onClick={() => hadleClick(item.title)}>
                    Learn more <BsArrowRight />
                  </div>
                </motion.div>
              ))}
            </div>
            {open && <ServiceModal infos={modalInfo[0]} setOpen={setOpen} />}
          </div>
          <div className="app__about-right">
            <h3>I'm vanel nwaba </h3>
            <h4>Every great developement begin with an even better story </h4>
            <div className="experience app__flex">
              <div className="achievement">
                <div className="acircle-container app__flex">
                  <div
                    className="acircle app__flex"
                  >
                    2+
                  </div>
                </div>
                <div>
                  <span>years </span>
                  <span>Experience</span>
                </div>
              </div>
              <div className="achievement">
                <div className="acircle-container app__flex">
                  <div
                    className="acircle app__flex"
                  >
                    5+
                  </div>
                </div>

                <div>
                  <span>completed </span>
                  <span>Projects</span>
                </div>
              </div>
              <div className="achievement">
                <div className="acircle-container app__flex">
                  <div
                    className="acircle app__flex"
                  >
                    5+
                  </div>
                </div>
                <div>
                  <span>companies </span>
                  <span>Work</span>
                </div>
              </div>
            </div>
            <p className="app__about-desc">
              Since begining of my journey as a developer nearly 3 years ago,
              I've done work for agencies, startups and collaborated with
              talented people to create digital products for both business and
              customer use. I'm quietly confident, naturally curious, and
              perpetually working on improving my coding problem at a time. I
              can provide clean code and pixel perfect design. I can olso make
              the more interactive with web animations. check out my portfolio.
            </p>
            <a href={cv} download className="button">
              download cv <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About