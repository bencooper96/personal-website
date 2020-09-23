import React from "react";

const CityBerry = () => {
  return (
    <object
      data="gif/city-berry.webp"
      className="absolute z-0 md:block hidden pointer-events-none"
      style={{
        height: "50vh",
        top: "30%",
        marginTop: "-30vh",
        left: "30%",
        marginLeft: "-35vh",
      }}
      alt="city berry"
    >
      {/* <img src="img/safari.png" alt="" /> */}
    </object>
  );
};

export default CityBerry;
