import React, { Component } from "react";
import {
  SoloStander,
  Polly,
  SmartShelves,
  Morph,
  BottleStencil,
  Hydroponics,
} from "./modalTextData";

class Modal extends Component {
  state = {
    components: {
      "Solo Stander": SoloStander,
      Polly: Polly,
      "Smart Shelves": SmartShelves,
      morph: Morph,
      "Bottle Stencil": BottleStencil,
      Hydroponics: Hydroponics,
    },
  };

  render() {
    const TagName = this.state.components[this.props.projectData.name];
    return (
      <React.Fragment>
        <div
          onClick={this.props.onCloseModal}
          className="md:block hidden m-2 hover:bg-gray-300 bg-gray-200 overflow-y-auto "
          style={{ width: "60vw", height: "40vw" }}
        >
          <p className="text-center">{this.props.projectData.name}</p>
          <TagName projectData={this.props.projectData} />
        </div>
        <div
          onClick={this.props.onCloseModal}
          className="md:hidden block hover:bg-gray-300 bg-gray-200 m-2 mx-auto overflow-y-auto "
          style={{ width: "80vw", height: "70vh" }}
        >
          <p className="text-center">{this.props.projectData.name}</p>
          <TagName projectData={this.props.projectData} />
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
