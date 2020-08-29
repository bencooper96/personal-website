import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Projects from "./myWork/projects";

class MyWork extends Component {
  state = {};
  render() {
    return (
      <div className="bg-gray-500 px-4 py-40 w-full" id="my-work">
        <div className="my-4">
          <div className="md:block hidden ">
            <HorizontalScroll reverseScroll={true} style={{ height: "40vw" }}>
              <Projects />
              {/* This is to ensure an array is passed to HorizonalScroll  */}
              {""}
            </HorizontalScroll>
          </div>
          <div className="md:hidden block h-full">
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
