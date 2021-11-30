import React from "react";
import info from "../../db/db.json";
import { Education, Experience } from "../../components";

const { basic_info, experience, education } = info;

const About = () => {
  return (
    <>
      <span id="about"></span>
      <h1>{basic_info.section_name.about}</h1>
      <div className="about">
        <Education education={education} basic_info={basic_info} />
        <Experience experience={experience} basic_info={basic_info} />
      </div>
    </>
  );
};

export default About;
