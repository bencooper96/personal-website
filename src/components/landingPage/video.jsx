import React, { Component } from "react";

class Video extends Component {
  state = {};
  render() {
    return (
      <video
        className="p-6 absolute pointer-events-none object-fill"
        style={{ height: "90%", width: "100%" }}
        key={this.props.videoIndex}
        autoPlay
        loop
        muted
      >
        <source
          src={
            "vid" + this.props.videoArray[this.props.videoIndex].path + "mp4"
          }
          type="video/mp4"
        />
        <source
          src={
            "vid" + this.props.videoArray[this.props.videoIndex].path + "webm"
          }
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
    );
  }
}

export default Video;
