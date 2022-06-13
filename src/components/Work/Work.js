import React, { useEffect, useState } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { client, urlFor } from "../../Client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import WorkModal from "./WorkModal";
import { IoIosSend } from "react-icons/io";

const Work = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfos, setModalInfos] = useState([]);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleWorkFilter = (item) => {
    if (item !== "All") {
      setFilterWork(works.filter((x) => x.tags.includes(item)));
    } else setFilterWork(works);
    setActiveFilter(item);
  };

  const HamdleModalOpen = (infos) => {
    setModalInfos(infos);
    setOpenModal(true);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <div id="work" className="section">
      <div className="app__wrapper app__flex">
        <h2 className="section-title-01">
          My Creative <span>Portfolio</span>
        </h2>
        <h2 className="section-title-02">
          My Creative <span>Portfolio</span>
        </h2>
        <div className="app__work-filter app__flex">
          {[
            "Syncfusion",
            "React",
            "TypeScript",
            "Material UI",
            "Node JS",
            "All",
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        {openModal && <WorkModal infos={modalInfos} setOpen={setOpenModal} />}
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio app__flex"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <div
                  className="app__work-tag app__flex"
                  onClick={() => HamdleModalOpen(work)}
                >
                  <p className="p-text">Read more</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="get-in-touch sub-section">
        <div className="container app__flex">
          <div className="contact-card app__flex">
            <div className="title">
              <h4>Let's Talk</h4>
              <h3>About Your</h3>
              <h2>Next Project</h2>
            </div>
            <div className="contact-btn">
              <a href="#contact" className="button">
                Get In Touch <IoIosSend />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
