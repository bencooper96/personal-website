import React, { Component } from "react";

class Writeup extends Component {
  state = {};
  render() {
    return (
      <div className="container my-1 text-center text-gray-500">
        {this.props.children}
      </div>
    );
  }
}

export default Writeup;
