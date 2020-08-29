import React, { Component } from "react";
import Modal from "./projectModal";
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
            <Image
              projectData={this.props.projectData}
              // onOpenModal={this.handleOpenModal}
            />
          </div>
        </Link>
        <div className={this.state.modalArray.modalClassName}>
          <Modal
            projectData={this.props.projectData}
            // onCloseModal={this.handleCloseModal}
          />
        </div>
      </React.Fragment>
    );
  }

  handleOpenModal = () => {
    // Make a shallow copy of the items
    let modalArray = this.state.modalArray;
    // Replace the property you're intested in
    modalArray.modalClassName = "block ";
    modalArray.imgClassName = "hidden";
    // Set the state to our new copy
    this.setState({ modalArray });
  };
  handleCloseModal = () => {
    // Make a shallow copy of the items
    let modalArray = this.state.modalArray;
    // Replace the property you're intested in
    modalArray.modalClassName = "hidden ";
    modalArray.imgClassName = "block ";
    // Set the state to our new copy
    this.setState({ modalArray });
  };
}

export default Project;
