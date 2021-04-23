import React, { useState, useRef, useEffect } from "react";
import Slider from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactVideo } from "reactjs-media";

export default function ProjectModal(props) {
  const wrapperRef = useRef(null);
  const { project } = props;

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.toggleModal();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return props.visible ? (
    <>
      <div
        ref={wrapperRef}
        className="justify-center items-center  px-8 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 py-2 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                {project.title}
              </h3>
              <button
                className="border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                onClick={props.toggleModal}
              >
                <span className="text-gray-500 m-auto text-xl sm:text-2xl md:text-3xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}

            <ReactVideo
              src={project.video}
              poster={project.image}
              primaryColor="purple"
              className="h-1/3"
              // other props
            />

            <div className="relative p-6 py-2 flex-auto">
              <p className="my-4 text-blueGray-500 text-sm sm:text-lg  leading-relaxed">
                {project.description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={props.toggleModal}
        className="opacity-25 fixed inset-0 z-40 bg-black"
      ></div>
    </>
  ) : null;
}
