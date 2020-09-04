import React, { Component } from "react";

class ProjectVideo extends Component {
  state = {};
  render() {
    return (
      <video playsinline autoplay controls muted loop className="w-1/3 mx-auto">
        <source
          src={`/img/projectPictures/${this.props.projectName}/vid${this.props.number}.webm`}
          type="video/webm"
        />
        <source
          src={`/img/projectPictures/${this.props.projectName}/vid${this.props.number}.mp4`}
          type="video/mp4"
        />
        {/* <source src="movie.ogg" type="video/ogg"> */}
        Your browser does not support the video tag.
      </video>
    );
  }
}

export default ProjectVideo;
