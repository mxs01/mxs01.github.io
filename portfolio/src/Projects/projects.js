import "./projects.scss";

import Project from "../Project/project";
import { useState } from "react";

import ProjectDetailPage from "../ProjectDetailPage/ProjectDetailPage";
import NoProjectsAvailable from "../NoProjectsAvailable/NoProjectsAvailable";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    image: "",
    language: "",
    detailedDescription: "",
    link: "",
  });

  const projects = []
  /*[
    {
      id: "p1",
      title: "A* Search Algorithm",
      image: "",
      language: "Python",
      description:"I've implemented a GUI implementation of the classic A* algorithm with user interaction.",
      detailedDescription:"The user is able to set borders via mouse events and afterwards launch the algorithm with the space button. I've visualized this algorithm to show the decision making of the A* Algorithm.",
      link: "github-link",
    },
    {
      id: "p2",
      title: "",
      image: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },
    {
      id: "p3",
      title: "",
      image: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },

    {
      id: "p4",
      image: "",
      title: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },
    {
      id: "p5",
      title: "",
      image: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },
    {
      id: "p6",
      title: "",
      image: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },
    {
      id: "p7",
      title: "",
      image: "",
      language: "Java",
      description: "",
      detailedDescription:'',
      link: "github-link",
    },
  ];*/

  const openModalHandler = (id) => {
    const project = projects.find((project) => project.id === id);
    setModalContent({
      title: project.title,
      image: project.image,
      language: project.language,
      detailedDescription: project.detailedDescription,
      link: project.link,
    });
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={"projects__container"}>
      {showModal && (
        <ProjectDetailPage
          title={modalContent.title}
          image={modalContent.image}
          language={modalContent.language}
          description={modalContent.detailedDescription}
          link={modalContent.link}
          onClose={closeModalHandler}
        />
      )}
      {projects.length === 0 && <NoProjectsAvailable/>}
      {projects.map((obj) => (
        <div key={obj.id} className={`animation__container _${obj.id}`}>
          <Project
          key={obj.id}
          id={obj.id}
          className = {`_${obj.id}`}
          title={obj.title}
          language={obj.language}
          description={obj.description}
          link={obj.link}
          openModal={openModalHandler.bind(null, obj.id)}
        />
        </div>
      ))}
    </div>
  );
};

export default Projects;
