import React, { Component } from "react";

class Writeup extends Component {
  state = {};
  render() {
    return (
      <div className="container my-10  text-gray-600">
        {this.props.children}
      </div>
    );
  }
}

export default Writeup;
