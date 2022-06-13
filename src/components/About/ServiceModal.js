import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiRadioButtonFill } from "react-icons/ri";
import "./About.scss";

const ServiceModal = ({ infos, setOpen }) => {
  const { title, subtitle, desc, provide } = infos;

  return (
    <div className="modal app__flex" onClick={() => setOpen(false)}>
      <div className="modal-body">
        <AiOutlineClose
          className="modal-close-btn"
          onClick={() => setOpen(false)}
        />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{desc}</p>
        <h4>what I provide ?</h4>
        <ul>
          {provide?.map((item, i) => (
            <li key={i}>
              <RiRadioButtonFill />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceModal;
