import React, { Component } from "react";
import Link from "next/link";
import Footer from "../../components/footer";

const Layout = (props) => {
  return (
    <div
      style={{
        fontFamily: "Courier, Courier New, monospace",
      }}
    >
      <div className="relative">
        <Link href="/" as={`/#my-work`}>
          <button className="fixed top-0 left-0 m-4 px-3 bg-gray-400 opacity-25 hover:opacity-75 rounded-full border-black border z-40">
            back
          </button>
        </Link>

        <img
          src={`/img/projectPictures/${props.projectImgPath}/landing.png`}
          alt="landing image"
        />
        <div className="absolute bottom-0 w-full z-20">
          <p className={props.textFormating + " text-center text-6xl"}>
            {props.projectName}
          </p>
          {props.logoFormating ? (
            <object
              data={`/img/projectPictures/${props.projectImgPath}/logo.png`}
              className={props.logoFormating + " mx-auto "}
              alt=""
            />
          ) : (
            ""
          )}

          <p className={props.textFormating + " text-center text-xl"}>
            {props.projectYear}
          </p>
        </div>
      </div>
      <div className="mx-auto md:w-2/3">
        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
