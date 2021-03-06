import React from "react";

const Image = (props) => {
  return (
    <React.Fragment>
      <div
        className="m-2 bg-gray-300 md:block mx-auto md:mx-2 relative border-gray-600 border-2"
        style={{
          cursor: "pointer",
          width: "80vw",
          height: "45vw",
          maxWidth: "1000px",
          maxHeight: "400px",
        }}
      >
        <img
          src={`img/projectPictures/${props.projectData.imgPath}preview.png`}
          className=" flex h-full float-right p-6"
        />
        <p className="absolute inset-0 text-center md:text-6xl sm:text-4xl text-3xl lg:py-32 md:p-16 p-8 text-gray-800">
          {props.projectData.name}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Image;
