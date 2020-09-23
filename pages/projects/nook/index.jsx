import React, { Component } from "react";
import Head from "next/head";

import Layout from "../../../src/components/projectPages/layout";

// import ProjectVideo from "../../../src/components/projectPages/projectVideo";
import ProjectImage from "../../../src/components/projectPages/projectImage";
import Writeup from "../../../src/components/projectPages/writeup";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Nook</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout projectImgPath="nook" projectName="nook" projectYear="2020">
          <div className="container ">
            <Writeup>
              <h1 className="text-4xl text-gray-600 m-10">Background:</h1>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                As many around the world know, 2020 is one of the most stressful
                years in modern history. This paired with many people spending
                more time at home than ever before, has helped through fuel on
                the houseplant adoption fire.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                I was one of the many that started to get more serious about my
                plant adoptions during quarantine. Having houseplants to care
                for made me feel needed by and connected to another living
                thing, without the expense and responsibility of a dog or cat.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                After receiving a new plant, I typically go through the same
                thought process:
              </p>
              <div className="m-3">
                <p className="text-xl text-gray-600 mx-auto mb-2 w-2/3">
                  1. “God, this plastic, nursery pot is ugly”
                </p>
                <p className="text-xl text-gray-600 mx-auto mb-2 w-2/3">
                  2. “I should buy a new pot”
                </p>
                <p className="text-xl text-gray-600 mx-auto mb-2 w-2/3">
                  3. “Wow, nice pots are expensive”
                </p>
                <p className="text-xl text-gray-600 mx-auto mb-2 w-2/3">
                  4. “I’ll deal with this later”
                </p>
              </div>
            </Writeup>
            {/* <ProjectVideo projectName="nook" number="1" /> */}
            <Writeup>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                I never actually deal with it later and so my house remains
                filled with ugly plastic pots.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                I have been incredibly frustrated that there isn’t a brand that
                I can turn to that makes what is supposed to be an enjoying,
                comforting addition to a home a little easier.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                It seemed like others online had similar sentiments. <br />
                <br />
                People typically either look for moderately priced/mass produced
                pots from a large department stores, continually check their
                local thrift store, or settle for an eyesore.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                This is an outdated gamut of options. In the golden era of
                direct-to-consumer brands, I found it unimaginable that there
                wasn’t a brand that stood behind an environmentally conscious,
                low cost option for good looking pots.
              </p>
              <p className="text-xl text-gray-600 mx-auto mb-6 w-2/3">
                People fill their homes with plants in order to give their
                spaces a spirit of tranquility and life. I'm building Nook in
                the hopes that I can aid in that.
              </p>
            </Writeup>
            <div className="flex">
              <ProjectImage projectName="nook" number="1" />
              <ProjectImage projectName="nook" number="2" />
            </div>
            <Writeup>
              <p className="text-xl text-gray-600 mx-auto mt-20 w-5/6">
                This project is still in progress.
              </p>
            </Writeup>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
