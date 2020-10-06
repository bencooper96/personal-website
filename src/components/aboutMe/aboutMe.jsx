import React, { Component } from "react";
import Skills from "./skills";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="bg-gray-300 my-0 w-full static">
        <div
          className="py-64 md:px-32 px-8 w-full relative z-0"
          id="about-me-target"
        >
          <h1 className="text-5xl md:text-6xl mt-32" id="about-me">
            hey, <br />
            i'm ben;
          </h1>
          {/* <div className="text-2xl md:text-3xl mt-8">
            a guy desperately trying to avoid becoming a corporate stiff.
          </div> */}
          <div className="text-2xl md:text-3xl my-20">
            i aspire to build things that help people and their communities
            thrive.
          </div>
          <div className="text-2xl md:text-3xl my-20">
            <p className="mb-4">
              i ended up a generalist on account of my interests & focus
              shifting regularly.
            </p>
          </div>
          <div className="text-2xl md:text-3xl my-20">
            <p className="mb-4">i would estimate my levels of confidence as:</p>
            <Skills />
          </div>
          <div className="text-2xl md:text-3xl mt-10">
            i like watching movies when it rains and riding my bike when it
            doesn't
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
