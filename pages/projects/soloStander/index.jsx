import React, { Component } from "react";
import Head from "next/head";

import Layout from "../../../src/components/projectPages/layout";

import ProjectVideo from "../../../src/components/projectPages/projectVideo";
import ProjectImage from "../../../src/components/projectPages/projectImage";
import Writeup from "../../../src/components/projectPages/writeup";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Solo Stander</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout
          projectImgPath="soloStander"
          projectName="Solo Stander"
          projectYear="2019"
        >
          <div className="container ">
            <Writeup>
              <h1 className="text-4xl text-gray-600 m-10">Background:</h1>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                There are 265,000 people with a spinal chord injury in the
                United States alone. When faced with this difficult challenge,
                nearly everyone we spoke to mentioned they felt as though they
                have lost a significant amount of their independence.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                One part of this multifaceted challenge is the losing ability to
                stand and the social, practical, and health issues that come
                with it.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                In the spring of 2019, I led a team of engineers through the
                design of a standing device and the development of a plan to
                bring it to market. Our client was a med-tech startup company
                based in San Diego, CA.
              </p>
            </Writeup>
            <ProjectVideo projectName="soloStander" number="1" />
            <Writeup>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                Our client asked us to design a standing device that was more
                accessible and flexible for use outside of the house.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                We set off to interview users to find out what this meant to
                them.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                Our biggest takeaways were that:
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                • Current standing devices were too expensive.
                <br />• Current standing devices were too heavy to use outside
                of the house. <br /> • Insurance would not cover both a chair
                and a standing device, so you would have to choose which device
                to get. (almost everyone chose the standard wheelchair)
              </p>
            </Writeup>
            <div className="flex">
              <ProjectImage projectName="soloStander" number="1" />
              <ProjectImage projectName="soloStander" number="2" />
            </div>
            <Writeup>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                We used this feedback to design a device that was an aftermarket
                attachment, as it works towards all of the most important
                criteria mentioned above.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                • It’s lower cost to produce.
                <br />
                • It's a lightweight, temporary add on.
                <br />• It allows users to continue using their expensive,
                custom fit, wheelchairs.
              </p>
              ç
            </Writeup>
            <div className="flex">
              <ProjectImage projectName="soloStander" number="3" />
              <ProjectImage projectName="soloStander" number="4" />
            </div>
            <Writeup>
              <p className="text-xl text-gray-600 mx-auto mt-20 w-2/3">
                Based on our commercialization plan, we estimate that our client
                is positioned to profit $2.6M over the 5 years following launch.
              </p>
            </Writeup>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
