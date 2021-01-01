import React, { Component } from "react";
import Head from "next/head";

import LandingPage from "../src/components/landingPage/landingPage";
import AboutMe from "../src/components/aboutMe/aboutMe";
import MyWork from "../src/components/myWork/myWork";
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
        <Head>
          <title>ben cooper</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {/* <Navigation />
        <LandingPage />
        <AboutMe /> */}
        <MyWork />
        <Footer />
      </div>
    );
  }
}

export default App;
