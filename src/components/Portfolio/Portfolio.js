import React from "react";
import './Portfolio.css'

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My work</h1>
        <div className="work-list">
          <div className="work">
            <img src={require("./work1.jpeg")} alt="Dashboard img" />
            <div className="layer">
              <h3>PowerBi Reports</h3>
              <p>
                I craft interactive Power BI reports with dynamic dashboards and
                clear visualizations,
                <br /> turning raw data into actionable insights for informed
                decision-making.
              </p>
              <a href="https://github.com/AkashKawade/PowerBi" 
              target="_blank" 
              rel="noopener noreferrer">
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
          <div className="work">
            <img src={require("./work2.png")} alt="project img" />
            <div className="layer">
              <h3>Employee Management System</h3>
              <p>
                In today's competitive business landscape, managing employees
                effectively is critical for a company's success. This project
                focuses on developing a solution for the employee management
                system.
              </p>
              <a
                href="https://github.com/Siddheshbhor4066/Employee_Management_System"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Portfolio;
