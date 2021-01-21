import React, { Component } from "react";
import Level from "./skillLevel";
import { skills } from "./skillsData";

class Skills extends Component {
  state = {};

  render() {
    var skillList = skills.map(function (skill) {
      return (
        <li
          key={skill.name}
          className="p-4 text-base sm:text-l md:text-xl lg:text-2xl lg:w-1/4 md:w-1/3 w-1/2"
        >
          <div
            style={{
              fontFamily: "Courier New, Courier, monospace",
            }}
          >
            <Level skillName={skill.name} levelValue={skill.level} />
            <p className="text-center">{skill.name}</p>
          </div>
        </li>
      );
    });

    return <ul className="flex flex-wrap">{skillList}</ul>;
  }
}

export default Skills;
