import React, { Component } from "react";

class ProjectImage extends Component {
  state = {};
  render() {
    return (
      <img
        className={this.props.customFormatting + " w-1/2 px-0"}
        src={`/img/projectPictures/${this.props.projectName}/${this.props.number}.png`}
      />
    );
  }
}

export default ProjectImage;
