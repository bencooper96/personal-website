import React from "react";

const Image = (props) => {
  return (
    <img
      src={"./img/skillLevel/" + props.name + ".png"}
      alt={props.name}
      className="object-contain mx-auto h-8 md:h-10 lg:h-12"
    />
  );
};

export default Image;
