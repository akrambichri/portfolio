import React, { useState } from "react";
import ProjectModal from "./modal";
import ProjectsData from "../../../assets/projects/ProjectsData";

export default function Work() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleModal = (index) => {
    setSelectedProject(ProjectsData[index]);
    setIsModalVisible(!isModalVisible);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">Work</h1>
        <p className="pt-2">The best of my works</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="bg-white rounded-md shadow-md lg:col-span-2">
          <img
            src={ProjectsData[0].image}
            alt=""
            className="object-cover w-full h-80"
          />
          <div className="p-8">
            <h3 className="font-bold text-2xl">{ProjectsData[0].title}</h3>
            <p className="pt-3">{ProjectsData[0].smallDescription}</p>
            <button
              onClick={() => toggleModal(0)}
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
            >
              View More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md">
          <img
            src={ProjectsData[1].image}
            alt=""
            className="object-cover w-full h-80"
          />
          <div className="p-8">
            <h3 className="font-bold text-2xl">{ProjectsData[1].title}</h3>
            <p className="pt-3">{ProjectsData[1].smallDescription}</p>
            <button
              onClick={() => toggleModal(1)}
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
            >
              View More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md">
          <img
            src={ProjectsData[2].image}
            alt=""
            className="object-cover w-full h-80"
          />
          <div className="p-8">
            <h3 className="font-bold text-2xl">{ProjectsData[2].title}</h3>
            <p className="pt-3">{ProjectsData[2].smallDescription}</p>
            <button
              onClick={() => toggleModal(2)}
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
            >
              View More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md lg:col-span-2">
          <img
            src={ProjectsData[3].image}
            alt=""
            className="object-cover w-full h-80"
          />
          <div className="p-8">
            <h3 className="font-bold text-2xl">{ProjectsData[3].title}</h3>
            <p className="pt-3">{ProjectsData[3].smallDescription}</p>
            <button
              onClick={() => toggleModal(3)}
              className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      <ProjectModal
        visible={isModalVisible}
        toggleModal={toggleModal}
        project={selectedProject}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </ProjectModal>
    </div>
  );
}
