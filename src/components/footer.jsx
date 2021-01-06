import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="grid sm:grid-cols-3 grid-cols-1 bg-gray-600 text-gray-300 px-3 pt-2 ">
        <div className="text-center sm:text-left">ben cooper</div>
        <div className="text-center">2020</div>
        <div className="text-center sm:text-right">cooperben83@gmail.com</div>
      </div>
      {/* <div className="grid bg-gray-600 text-gray-300 px-3 pt-2 sm:hidden ">
        <div className="flex-1 text-center text-lg">ben cooper</div>
        <div className="flex-1 text-center">2020</div>
        <div className="flex-1 text-center">cooperben83@gmail.com</div>
      </div> */}
    </footer>
  );
};

export default Footer;
