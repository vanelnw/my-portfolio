import React, { useEffect, useState } from "react";
import "./Services.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { client, urlFor } from "../../Client";

const Service = () => {
  const [services, setservices] = useState([]);

  const servicess = [
    {
      title: "wB Development",
      description: "I'm a good web developper",
      imgUrl: images.about01,
    },
    {
      title: "Native Development",
      description: "I'm a good web developper",
      imgUrl: images.about02,
    },
    {
      title: "Full stack Development",
      description: "I'm a good web developper",
      imgUrl: images.about03,
    },
  ];

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setservices(data);
    });
  }, []);

  return (
    <div id="service" className="app__container">
      <div className="app__wrapper ">
        <h2 className="head-text">
          I Know that <span>Good Development</span> <br /> means{" "}
          <span>Good Business </span>
        </h2>

        <div className="app__profiles">
          {servicess.map((service, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={service.title + index}
            >
              <img src={service.imgUrl} alt={service.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {service.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
