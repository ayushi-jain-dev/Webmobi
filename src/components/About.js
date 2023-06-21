import React from "react";
import { Element } from "react-scroll";
import image from "../images/Background.jpg";


const About = () => {
  return (
    <>
    <div className="image-content">
    <img src={image} alt="Incubyte"/>
    </div>
    <Element name="about">
      <div className="about">
        <h2>About Us</h2>
        <p>
          With over 3 years of experience, we at Incubyte specialize in setting
          up captive development centers for growing startups, addressing key
          challenges and providing tailor-made solutions for your business
          needs.
        </p>
      </div>
    </Element>
    </>
  );
};

export default About;
