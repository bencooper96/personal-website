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
        <title>Smart Shelves</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout
        projectImgPath="smartShelves"
        projectName="Smart Shelves"
        projectYear="2018"
      >
        <div className="container ">
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Background:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              sdfasdfasdf
            </p>
          </Writeup>
          <ProjectVideo projectName="smartShelves" number="1" />
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Solution:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              asdfasdfasdfasdfasdf
            </p>

            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>A </b>asdfasdfasdf
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>B </b> asdfasdfasdfasdcasdcasdca
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>C </b>sdfajksdcasdcjasndclasjd
            </li>
          </Writeup>
          <div className="flex">
            <ProjectImage projectName="smartShelves" number="1" />
            <ProjectImage projectName="smartShelves" number="2" />
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
            <ProjectImage projectName="smartShelves" number="3" />
            <ProjectImage projectName="smartShelves" number="4" />
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
