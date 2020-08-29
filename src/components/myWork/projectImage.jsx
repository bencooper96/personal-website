import React from "react";

const Image = (props) => {
  return (
    <React.Fragment>
      <div
        // onClick={props.onOpenModal}
        className="m-2 bg-green-600 md:block hidden"
        style={{ cursor: "pointer", width: "80vw", height: "53vw" }}
      >
        <p className="text-center">{props.projectData.name}</p>
        <p className="text-center">this is the image</p>
      </div>
      <div
        onClick={props.onOpenModal}
        className="m-2 bg-orange-600 md:hidden block mx-auto "
        style={{ cursor: "pointer", width: "80vw", height: "53vw" }}
      >
        <p className="text-center">{props.projectData.name}</p>
        <p className="text-center">this is the image</p>
      </div>
    </React.Fragment>
  );
};

export default Image;
