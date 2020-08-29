import React, { Component } from "react";

import LandingPage from "../src/components/landingPage";
import AboutMe from "../src/components/aboutMe";
import MyWork from "../src/components/myWork";
import Footer from "../src/components/footer";
import Navigation from "../src/components/navigation";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          fontFamily: "Courier New, Courier, monospace",
        }}
      >
        <Navigation />
        <LandingPage />
        <AboutMe />
        <MyWork />
        <Footer />
      </div>
    );
  }
}

export default App;
