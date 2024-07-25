import React from "react";
import "./About.css";
import "./user.jpg";

import SkillsEducation from "./Skills/SkillsEdu";
function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col1">
            <img src={require("./user.jpg")} alt="User Img" />
          </div>
          <div className="about-col2">
            <h1 className="sub-title">About me</h1>
            <p id="info">
              Hello! I'm Akash Kawade, and I have completed an MSc in Data Science With a solid background in Python, Power BI, Machine
              Learning, Excel, and SQL, I excel at turning complex data into
              actionable insights and creating intuitive web applications.
              <br/> 
              <br />
              My
              journey has recently taken me into the world of web development,
              where I've acquired foundational skills in JavaScript, CSS,<br /> and
              HTML, and I’m now delving into React. I am passionate about
              building efficient, user-centric applications and continuously
              enhancing my skills in both data science and web development.
               <br />
               <br />
              I thrive on writing clean, maintainable code and delivering
              responsive, high-quality designs. If you're looking for someone
              who combines data expertise with web development skills, let’s
              connect and create something impactful together!
            </p>
            <SkillsEducation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
