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
              The world is becoming more urbanized. This is overall a really
              good thing; it is more environmentally friendly, better for the
              economy, and enables people to exchange ideas and inspiration. One
              downside of the city, however, is the tight spaces those who live
              there are squeezed into.
            </p>

            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              In the Fall of 2018, Stanley Black and Decker commissioned the
              design of a kitchen product to break into the global market.
              Through over 90 user interviews and 70 survey responses from
              people living in Asian Pacific cities, we learned that 80% people
              are frustrated with their small kitchen space and were willing to
              pay for a solution.
            </p>
          </Writeup>
          <ProjectVideo projectName="smartShelves" number="1" />
          <Writeup>
            <h1 className="text-4xl text-gray-600 m-10">Solution:</h1>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              Through interviews, we learned people did not want to lose space
              in their kitchen to add another product; making the development of
              a product difficult at face value.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              After brainstorming and prototyping solutions on improving the
              space efficiency of existing products, the team came to the
              realization that adding space, rather than shrinking appliances,
              would be the best way to solve the problem. This discovery
              inspired Smart Shelves, a collapsible shelving system.
            </p>
            <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
              This system takes advantage of the French cleat concept. In the
              active position, the product is held in place using its own
              weight, making use of the first French cleat.
            </p>
          </Writeup>
          <p className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
            This system takes advantage of the French cleat concept. In the
            active position, the product is held in place using its own weight,
            making use of the first French cleat.
          </p>
          <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
            <b>1. </b>Extreme ease of use
          </li>
          <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
            <b>2. </b> Low cost of manufacturing as it will not include any
            expensive mechanisms and can all be injection molded in one
            continuous piece.
          </li>
          <li className="text-xl text-gray-600 mx-auto mb-6 w-5/6">
            <b>3. </b>Increased product strength as the number of potential
            failure points is greatly reduced.
          </li>
          <Writeup></Writeup>
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
