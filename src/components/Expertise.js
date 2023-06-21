import React from "react";
import { Element } from "react-scroll";

const Expertise = () => {
  return (
    <Element name="expertise-content">
        <h1>Our Expertise</h1>
        <div className="card-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hiring</h5>
            <p className="card-text">
              Leveraging our deep understanding of the talent landscape, we
              devise effective hiring strategies to attract the best tech
              professionals.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Human Resources Management</h5>
            <p className="card-text">
              We ensure a healthy and productive work environment by
              implementing efficient HR practices tailored to the unique needs
              of your startup.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Taxation</h5>
            <p className="card-text">
              Our team navigates through the complexities of the tax system,
              ensuring compliance while optimizing financial efficiency.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Regulatory Guidance</h5>
            <p className="card-text">
              We stay abreast of the ever-changing regulatory landscape,
              providing timely advice to ensure your startup's operations stay
              within legal boundaries.
            </p>
          </div>
        </div>
        </div>
    </Element>
  );
};

export default Expertise;
