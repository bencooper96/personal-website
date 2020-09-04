import React, { Component } from "react";
import Scrollspy from "react-scrollspy";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Scrollspy
          items={["landing", "about-me-target", "my-work"]}
          currentClassName="is-current"
          className="fixed top-0 right-0 h-12 w-20 z-40 mt-2 mr-2 flex "
          offset={-10}
        >
          <li className="transition duration-700 ease-in-out relative rounded-full h-5 w-5 items-center justify-center border-solid border-black hover:bg-gray-500 mx-1 opacity-50">
            <a href="#">
              <img
                src="img/skillLevel/empty.png"
                className="h-full w-full pointer-events-none"
                alt=""
              />
            </a>
          </li>
          <li className="transition duration-700 ease-in-out relative rounded-full h-5 w-5 items-center justify-center border-solid border-black hover:bg-gray-500 mx-1 opacity-50">
            <a href="#about-me">
              <img
                src="img/skillLevel/empty.png"
                className="h-full w-full pointer-events-none"
                alt=""
              />
            </a>
          </li>
          <li className="transition duration-700 ease-in-out relative rounded-full h-5 w-5 items-center justify-center border-solid border-black hover:bg-gray-500 mx-1 opacity-50">
            <a href="#my-work">
              <img
                src="img/skillLevel/empty.png"
                className="h-full w-full pointer-events-none"
                alt=""
              />
            </a>
          </li>
        </Scrollspy>
      </React.Fragment>
    );
  }
}

export default Navigation;
