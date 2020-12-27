import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../src/components/projectPages/layout";

import ProjectVideo from "../../../src/components/projectPages/projectVideo";
import ProjectImage from "../../../src/components/projectPages/projectImage";
import Writeup from "../../../src/components/projectPages/writeup";
import Caption from "../../../src/components/projectPages/caption";

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Herd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout
        projectImgPath="herd"
        // projectName="Herd"
        projectYear="2020"
        logoFormating="h-40"
      >
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
              through a user driven prompt & polling system.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              The data collected on the platform is then visualized and freely
              shared with local representatives; allowing politicians who do not
              have the time or resources to perform analysis to gain valuable
              insights on what their community needs.
            </p>
          </Writeup>
          <div className="flex">
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-10"
              number="5"
            />
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-10"
              number="7"
            />
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-10"
              number="6"
            />
          </div>
          <Caption>current mobile design</Caption>
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Core Decisions:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Allow only verified Users</b> to eliminate the creation of
              troll and bot accounts that derail the conversation.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Focus on city & state politics</b> to limit the partisian
              toxicity at the national level conversation.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Remove the binary of like/dislike</b> and celebrate nuance in
              opinions through using a slider.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              <b>Open data and transparent practices</b> to ensure the data we
              collect is valuable for everyone, not just the few who can pay.
            </p>
          </Writeup>
          <div className="flex">
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-5"
              number="2"
            />
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-5"
              number="3"
            />
            <ProjectImage
              projectName="herd"
              customFormatting="w-1/3 px-5"
              number="4"
            />
          </div>
          <Caption>early concept designs</Caption>
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">My Role:</h1>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Led the design of the Herd app, website, and graphics.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Conducted user interviews to understand needs of our target
              market.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Developed (& continue to develop) the Herd App.
            </li>
            <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Collaborated on the creation of the brand identity.
            </li>
          </Writeup>
          <Writeup>
            <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
              This project is still ongoing.
              <Link href="https://joinherd.us">
                <a className="text-blue-600 underline">
                  Click here if you want to learn more or follow the progress.
                </a>
              </Link>
            </p>
          </Writeup>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default App;
