import React from "react";

const Image = (props) => {
  return (
    <React.Fragment>
      <div
        className="m-2 bg-gray-300 md:block mx-auto md:mx-2 relative"
        style={{ cursor: "pointer", width: "80vw", height: "53vw" }}
      >
        <img
          src={`img/projectPictures/${props.projectData.imgPath}3.png`}
          className=" flex h-full float-right p-6"
        />
        <p className="absolute inset-0 text-center md:text-6xl sm:text-4xl text-3xl lg:py-32 md:p-16 p-8">
          {props.projectData.name}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Image;
