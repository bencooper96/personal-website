import React, { Component } from "react";

class ProjectImage extends Component {
  state = {};
  render() {
    return (
      <img
        className={" w-1/2 px-0 " + this.props.customFormatting}
        src={`/img/projectPictures/${this.props.projectName}/${this.props.number}.png`}
      />
    );
  }
}

export default ProjectImage;
