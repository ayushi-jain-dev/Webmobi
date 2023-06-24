import React from "react";
import { Element } from "react-scroll";
import image from "../images/Background.jpg";
import Ellipse_1 from "../images/Ellipse_1.png"
import Ellipse_2 from "../images/Ellipse_2.png"
import Ellipse_3 from "../images/Ellipse_3.png"


const About = () => {
  return (
    <>
    <div className="image-content">
      {/*<div className='ellipse_3'><img src={Ellipse_3} alt=''/></div>*/}
      {/*<div className='ellipse_1'><h1>Welcome to <strong>Incubyte</strong></h1>*/}
      {/*  <p>Building bridges to success in the tech ecosystem</p>*/}
      {/*  <img src={Ellipse_1}  alt=''/></div>*/}
      {/*<div className='ellipse_2'><img src={Ellipse_2} alt=''/></div>*/}
      <img src={image} alt='Incubyte'/>
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
