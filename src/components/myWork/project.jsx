import React, { Component } from "react";

import Image from "./projectImage";
import Link from "next/link";

class Project extends Component {
  state = {
    modalArray: {
      imgClassName: "block",
      modalClassName: "hidden",
    },
  };
  render() {
    return (
      <React.Fragment>
        <Link
          href="/projects/[slug]"
          as={`/projects/${this.props.projectData.slug}`}
        >
          <div className={this.state.modalArray.imgClassName}>
            <Image projectData={this.props.projectData} />
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default Project;
