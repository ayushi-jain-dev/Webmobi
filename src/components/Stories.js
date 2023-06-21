import React from "react";
import { Element } from "react-scroll";

const Stories = () => {
  return (
    <>
      <Element name="stories-content">
        <div className="stories">
        <div className="stories-container">
          <h3>Success Stories</h3>
          <p>
            Over the years, we have helped numerous startups successfully
            establish their captive development centers. Join the roster of our
            successful collaborations.
          </p>
        </div>
        </div>
      </Element>
    </>
  );
};

export default Stories;
