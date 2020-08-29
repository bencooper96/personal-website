import React, { Component } from "react";
import Image from "./levelImage";

class Level extends Component {
  state = {};
  render() {
    var skillName = this.props.skillName;
    return (
      <div>
        {this.generateLevelImage().map(function (item, i) {
          return <Image key={skillName + i} name={item} />;
        })}
      </div>
    );
  }
  generateLevelImage() {
    var imageRecipe = [];
    var x = this.props.levelValue;
    if (Number.isInteger(x)) {
      for (let i = 0; i < 4 - x; i++) {
        imageRecipe.push("empty");
      }
      for (let i = 0; i < x; i++) {
        imageRecipe.push("full");
      }
    } else {
      for (let i = 0; i < 4 - x - 0.5; i++) {
        imageRecipe.push("empty");
      }
      imageRecipe.push("half");
      for (let i = 0; i < x - 0.5; i++) {
        imageRecipe.push("full");
      }
    }

    return imageRecipe;
  }
}

export default Level;
