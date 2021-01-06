import React, { Component } from "react";
import TV from "./tv";
import Statue from "./statue";
import Factory from "./factory";
import CityBerry from "./cityBerry";
import ScrollArrow from "./scrollArrow";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="relative " style={{ height: "120vh" }}>
        <div
          className="bg-top bg-cover absolute bg-gray-300 w-full overflow-x-hidden z-0"
          style={{
            backgroundImage: "url(/img/landing-bg.png)",
            height: "230vh",
          }}
        ></div>

        <div className="absolute inset-0 p-10 pb-32 overflow-x-hidden">
          <div id="landing" className="relative h-full">
            <Statue />
            <Factory />
            <CityBerry />
            <TV />
            <div className="absolute bottom-0 mb-4 inset-x-0 ">
              <ScrollArrow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
