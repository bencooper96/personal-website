import React, { Component } from "react";
import Link from "next/link";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          fontFamily: "Courier, Courier New, monospace",
        }}
      >
        <div className="relative">
          <Link href="/" as={`/`}>
            <button className="absolute top-0 left-0 m-4 px-3 bg-gray-400 opacity-25 hover:opacity-75 rounded-full border-black border z-10">
              back
            </button>
          </Link>

          <img
            src={`/img/projectPictures/${this.props.projectImgPath}/landing.png`}
            alt="landing page"
          />
          <div className="absolute bottom-0 w-full z-20">
            <p className="text-center text-6xl ">{this.props.projectName}</p>
            <p className="text-center text-xl ">{this.props.projectYear}</p>
          </div>
        </div>
        <div className="mx-auto md:w-2/3">
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
