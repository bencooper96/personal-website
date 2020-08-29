import React, { Component } from "react";
import Video from "./video";

class Screen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          src="gif/noise.gif"
          alt=""
          className="p-6 absolute pointer-events-none"
          style={{ height: "90%", width: "100%" }}
        />
        <Video
          videoIndex={this.props.videoIndex}
          videoArray={this.props.videoArray}
        />
      </React.Fragment>
    );
  }
}

export default Screen;
