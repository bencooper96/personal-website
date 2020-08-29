import React, { Component } from "react";
import Screen from "./screen";
import { videoData } from "./videoData";

class TV extends Component {
  state = {
    videoArray: videoData,
    videoIndex: 0,
  };

  handleVideoIncrease = () => {
    if (this.state.videoIndex < this.state.videoArray.length - 1) {
      this.setState(({ videoIndex }) => ({ videoIndex: videoIndex + 1 }));
    } else {
      this.setState(({ videoIndex }) => ({ videoIndex: 0 }));
    }
  };

  handleVideoDecrease = () => {
    if (this.state.videoIndex - 1 < 0) {
      this.setState(({ videoIndex }) => ({
        videoIndex: this.state.videoArray.length - 1,
      }));
    } else {
      this.setState(({ videoIndex }) => ({
        videoIndex: videoIndex - 1,
      }));
    }
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="absolute md:block hidden"
          style={{
            height: "60vh",
            width: "70vh",
            top: "50%",
            marginTop: "-30vh",
            left: "50%",
            marginLeft: "-35vh",
          }}
        >
          <img
            src="img/tv-body.png"
            className="absolute pointer-events-none"
            alt="tv-body"
          />
          <div className="z-10 ">
            <Screen
              videoIndex={this.state.videoIndex}
              videoArray={this.state.videoArray}
            />
          </div>
          <img
            src="img/tv-screenguard.png"
            alt=""
            className="z-20 p-4 absolute pointer-events-auto"
            onClick={this.handleVideoIncrease}
          />
        </div>

        <div className="md:hidden block">
          <div
            className="absolute"
            style={{
              height: "80vw",
              width: "90vw",
              top: "40%",
              marginTop: "-40vw",
              left: "50%",
              marginLeft: "-45vw",
            }}
          >
            <img
              src="img/tv-body.png"
              className="absolute pointer-events-none"
              alt="tv-body"
            />
            <div className="z-10">
              <img
                src="gif/BCLogo.gif"
                alt=""
                className="p-6 absolute pointer-events-none"
                style={{ height: "90%", width: "100%" }}
              />
            </div>
            <img
              src="img/tv-screenguard.png"
              alt=""
              className="z-20 p-4 absolute pointer-events-auto"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TV;
