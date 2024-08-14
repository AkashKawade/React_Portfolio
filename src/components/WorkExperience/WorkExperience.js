import React from 'react';
import './WorkExperience.css';

function WorkExperience() {
  return (
    <div id="workexperience">
      <div className="container">
        <h1 className="sub-title">Work Experience</h1>

        <div className="experience-columns">
          <div className="experience-item">
            <h2>Data Analytics Intern</h2>
            <h3>Elliot System, Pune</h3>
            <p>June 2024 – Present</p>
            <ul>
              <li>Specialize in time series analysis and predictive analytics.</li>
              <li>Currently working on energy consumption data to predict future energy usage.</li>
              <li>Utilize tools such as Python, Pandas, and Machine Learning techniques to analyze and interpret complex datasets.</li>
              <li>Develop models to forecast energy demand, contributing to more efficient energy management strategies.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h2>Intern, Virtual Assistant Development</h2>
            <h3>Dr. D. Y. Patil Unitech Society’s SOFTWARE DEVELOPMENT CELL, Pimpri</h3>
            <p>December 2023 – May 2024</p>
            <ul>
              <li>Developed a virtual assistant using Python, API Keys, and VS Code.</li>
              <li>Implemented features such as speech recognition and Natural Language Processing (NLP).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
