import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="contact-container">
        <h2>Ready to Scale Up?</h2>
        <p>
          Experience the Incubyte advantage today. Let us help you navigate the
          challenges and scale up your operations smoothly and efficiently.
        </p>
        <button type="button" className="button">
          Contact Us
        </button>
      </div>
      <footer>
        <div className="center">&copy; 2023 Incubyte</div>
      </footer>
    </Element>
  );
};

export default Contact;
