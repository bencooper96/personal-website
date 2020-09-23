import React, { Component } from "react";
import Head from "next/head";

import Layout from "../../../src/components/projectPages/layout";

import ProjectVideo from "../../../src/components/projectPages/projectVideo";
import ProjectImage from "../../../src/components/projectPages/projectImage";
import Writeup from "../../../src/components/projectPages/writeup";

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Solo Stander</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout
        projectImgPath="soloStander"
        projectName="Solo Stander"
        projectYear="2019"
      >
        <div className="container ">
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Background:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              There are 265,000 people with a spinal cord injury in the United
              States alone. When faced with this difficult challenge, nearly
              everyone we spoke to mentioned they felt as though they have lost
              a significant amount of their independence.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              One part of this multifaceted challenge is the losing ability to
              stand and the social, practical, and health issues that come with
              it.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              In the spring of 2019, I led a team of engineers through the
              design of a standing device and the development of a plan to bring
              it to market. Our client was a med-tech startup company based in
              San Diego, CA.
            </p>
          </Writeup>
          <ProjectVideo projectName="soloStander" number="1" />
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Solution:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              From what was learned during user interviews, we built a device
              that would be:
            </p>

            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Lightweight </b>for mobility and not overworking the user’s
              shoulders
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Low cost </b> to ensure users can pay out of pocket instead of
              dealing with confusing and strict insurance company rules about
              purchasing devices.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>An aftermarket attachment </b>that would fit on user’s current
              wheelchair to allow users to continue using their custom fit
              wheelchairs with both physical and sentimental value.
            </li>
          </Writeup>
          <div className="flex">
            <ProjectImage projectName="soloStander" number="1" />
            <ProjectImage projectName="soloStander" number="2" />
          </div>
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">My Role:</h1>

            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Led the team through the design process of the product.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Guided design, brainstorming, and prototyping sessions.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Built the CAD model of the prototype.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Provided guidance and revisions for presentations and reports
              about the project.
            </li>
          </Writeup>
          <div className="flex">
            <ProjectImage projectName="soloStander" number="3" />
            <ProjectImage projectName="soloStander" number="4" />
          </div>
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              Based on our commercialization plan, we estimate that our client
              is positioned to profit $2.6M over the 5 years following launch.
            </p>
          </Writeup>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default App;
