import React from "react";

const Statue = () => {
  return (
    <img
      src="img/statue.png"
      className="absolute z-40 md:block hidden pointer-events-none"
      style={{
        height: "65vh",
        transform: "rotate(-10deg)",
        top: "70%",
        marginTop: "-30vh",
        left: "25%",
        marginLeft: "-35vh",
      }}
      alt="statue"
    />
  );
};

export default Statue;
