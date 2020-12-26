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
        <title>morph</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout
        projectImgPath="morph"
        projectLogo="logo"
        projectYear="2020"
        textFormating="text-gray-200"
        logoFormatting="xs:h-10 md:h-40"
      >
        <div className="container ">
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              Morph is an experiment in ways to create 3D forms through a
              digital interface. Morph was created as a supplemental tool for
              generative & digital art, allowing artists to create unique and
              strange 3D forms through a few strokes of their mouse.
            </p>
          </Writeup>
          <div className="flex">
            <ProjectImage
              projectName="morph"
              number="1"
              customFormatting="mr-0"
            />
            <ProjectImage
              projectName="morph"
              number="2"
              customFormatting="ml-0"
            />
          </div>
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              The end goal of this type of project would be to truly capture the
              artist’s intentions behind strokes in a sketch when rendering the
              digital sculpture; allowing the artist to work symbiotically with
              the algorithms.
            </p>
          </Writeup>
          <div className="flex">
            <ProjectImage
              projectName="morph"
              number="3"
              customFormatting="mx-auto"
            />
          </div>
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              At the current state, the sculpting process can only create
              rotated structures from sketches.
            </p>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              This project is still ongoing. If you want to use the tool
              yourself or follow along with development here is{" "}
              <div className="inline">
                <Link href="https://morph-v2.vercel.app/">
                  <a className="border">
                    <img
                      className="inline h-10"
                      src="/img/projectPictures/morph/logo.png"
                      alt="morph"
                    />
                  </a>
                </Link>{" "}
                and its{" "}
                <Link href="https://github.com/bencooper96/morph-v2">
                  {/* <a className="text-blue-600 underline">github</a> */}
                  <a>
                    <img
                      className="inline"
                      src="/img/logos/Github/Github-Mark-32px.png"
                      alt="github"
                    />
                  </a>
                </Link>
              </div>
            </p>
          </Writeup>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default App;
