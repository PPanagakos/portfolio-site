import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>
          Interested in collaborating or just want to say hi? Send me an Email!
        </p>
        <a
          href="mailto:ptpanagakos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
