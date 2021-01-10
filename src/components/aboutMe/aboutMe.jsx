import React, { Component } from "react";
import Skills from "./skills";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="bg-gray-300 my-0 w-full static">
        <div
          className="py-64 md:px-32 px-4 w-full relative z-0"
          id="about-me-target"
        >
          <h1 className="text-5xl md:text-6xl mt-32" id="about-me">
            Hey, <br />
            I'm Ben;
          </h1>

          <div className="text-2xl md:text-3xl my-20">
            I like to build things that help people and communities thrive.
          </div>
          {/* <div className="text-2xl md:text-3xl my-20">
            <p className="mb-4">
              I am interested in many things and, when my attention is grabbed,
              I can't help but devote myself wholeheartedly.
            </p>
          </div> */}
          <div className="text-2xl md:text-3xl my-20">
            <p className="mb-4">I would estimate my levels of expertise as:</p>
            <Skills />
          </div>
          <div className="text-2xl md:text-3xl mt-10">
            I like watching movies when it rains and riding my bike when it
            doesn't.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
