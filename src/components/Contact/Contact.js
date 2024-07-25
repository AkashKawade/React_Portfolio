import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <h1 className="sub-title">Contact Me</h1>
        <p>akashkawade987@gmail.com</p>
        <p>Phone : 9307635880</p>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/akash-kawade-5711b1260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/AkashKawade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
        </div>
        <div>
          <a
            href="Akash_Kawade_CV.pdf"
            download
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
