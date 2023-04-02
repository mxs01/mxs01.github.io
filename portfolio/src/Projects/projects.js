import classes from "./projects.module.css";

import Project from "../Project/project";

const Projects = () => {
  let projects = [
    {
      id: "p1",
      title: "A* Search Algorithm",
      language: "Python",
      information:
        "I've implemented a GUI implementation of the classic A* algorithm with user interaction",
      link: "github-link",
    },
    {
      id: "p2",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },
    {
      id: "p3",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },

    {
      id: "p4",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },
    {
      id: "p5",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },
    {
      id: "p6",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },
    {
      id: "p7",
      title: "",
      language: "Java",
      information: "",
      link: "github-link",
    },
  ];

  return (
    <div className={classes.projects__container}>
      {projects.map((obj) => (
        <Project
            key={obj.id}
            id={obj.id}
            title={obj.title}
            language={obj.language}
            information={obj.information}
            link={obj.link}
        />
      ))}
    </div>
  );
};

export default Projects;
