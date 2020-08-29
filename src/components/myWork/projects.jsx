import React, { Component } from "react";
import { ProjectsData } from "./projectData";
import Project from "./project";

class Projects extends Component {
  state = {};
  render() {
    var projectList = ProjectsData.map(function (project) {
      return <Project key={project.name} projectData={project} />;
    });

    return <React.Fragment>{projectList}</React.Fragment>;
  }
}

export default Projects;
