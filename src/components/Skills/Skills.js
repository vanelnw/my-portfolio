import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { client, urlFor } from "../../Client";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div id="skills" className="section">
      <div className="app__wrapper app__flex">
        <h2 className="section-title-01">
          Skills
        </h2>
        <h2 className="section-title-02">
          Skills
        </h2>
        <div className="container">
          <div className="card">
            <h2 className="Stitle">What I Can Do</h2>
            <div className="skills-content ">
              {skills?.map((skill, i) => (
                <div className="skill app__flex" key={i}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
