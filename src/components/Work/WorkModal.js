import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiRadioButtonFill } from "react-icons/ri";
import { urlFor } from "../../Client";
import "./WorkModal.scss";

const WorkModal = ({ infos, setOpen }) => {
  const { imgUrl, name, description, projectLink, demoLink, tags } = infos;
  return (
    <div className="modal app__flex" onClick={() => setOpen(false)}>
      <div className="work-modal-body">
        <AiOutlineClose
          className="modal-close-btn svg"
          color="white"
          onClick={() => setOpen(false)}
        />
        <div className="body-first">
          <div className="image-back" />
          <img className="image" src={urlFor(imgUrl)} alt={name} />
        </div>
        <div className="modal-content">
          <div className="modal-details">
            <div className="details">
              <p>Project</p>
              <h2>Overview</h2>
              <p>{description}</p>
            </div>
            <div className="techno">
              <p className="p1">Technologies</p>
              <div>
                {tags.map((tag, i) => (
                  <p>
                    <RiRadioButtonFill /> {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="modal-button">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Demo
            </a>
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="button btn-02"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;
