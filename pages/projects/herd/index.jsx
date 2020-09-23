import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../src/components/projectPages/layout";

import ProjectVideo from "../../../src/components/projectPages/projectVideo";
import ProjectImage from "../../../src/components/projectPages/projectImage";
import Writeup from "../../../src/components/projectPages/writeup";

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Herd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout projectImgPath="herd" projectName="Herd" projectYear="2020">
        <div className="container ">
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Background:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Today, it is hard to find someone that does not agree that
              political conversations over social media are toxic. Regardless,
              we continue to participate in conversations that are unproductive.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Local politicians have told us that they don’t use social media as
              a tool to gain a better understanding of their constituents
              because it is too:
            </p>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Nationalized
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Rife with trolls, bots, and bullies
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Unstructured and often difficult to make sense of
            </li>
          </Writeup>
          {/* <ProjectVideo projectName="herd" number="1" /> */}
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Solution:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Herd is a platform focused on bringing local problems to light
              through a user generated prompt & polling system.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              The data collected on the platform is then visualized and freely
              shared with local representatives; allowing politicians who do not
              have the time or resources to perform analysis to gain valuable
              insights on what their community needs.
            </p>
          </Writeup>
          <div className="flex">
            <ProjectImage projectName="herd" number="1" />
            <ProjectImage projectName="herd" number="2" />
          </div>
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">My Role:</h1>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              I lead the product design effort
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              I work with my cofounder on branding and business strategy
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              I build and own the product
            </li>
          </Writeup>
          <div className="flex">
            <ProjectImage projectName="herd" number="3" />
            <ProjectImage projectName="herd" number="4" />
          </div>
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              This project is still ongoing. If you want to learn more or follow
              the progress here is the{" "}
              <Link href="https://herd-v1.vercel.app/">
                <a className="text-blue-600 underline">link</a>
              </Link>
            </p>
          </Writeup>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default App;
