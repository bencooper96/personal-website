import React, { Component } from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { ProjectsData } from "./projectData";
import { Project } from "./project";

const MyWork = () => {
  return (
    <div className="bg-gray-500 py-10 md:px-4 " id="my-work">
      <div className="text-5xl md:text-6xl">
        <p className="mb-5 text-center">My Work</p>
      </div>
      <span className="hidden md:block">
        <Swiper
          spaceBetween={0.5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {ProjectsData.map(function (project) {
            return (
              <SwiperSlide key={project.name}>
                <div className="mx-auto w-5/6">
                  <Project projectData={project} />
                </div>
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
