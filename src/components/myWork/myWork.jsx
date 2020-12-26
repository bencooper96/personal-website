import React, { Component } from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { ProjectsData } from "./projectData";
import { Project } from "./project";

const MyWork = () => {
  return (
    <div className="bg-gray-500 py-10 md:py-40 md:px-4 w-full" id="my-work">
      <span className="hidden md:block bg-gray-300">
        <Swiper
          spaceBetween={0.5}
          slidesPerView={1.2}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {ProjectsData.map(function (project) {
            return (
              <SwiperSlide key={project.name}>
                <Project projectData={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </span>
      <span className="block md:hidden ">
        {ProjectsData.map(function (project) {
          return (
            <div className="my-2" key={project.name}>
              <Project projectData={project} />
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default MyWork;
