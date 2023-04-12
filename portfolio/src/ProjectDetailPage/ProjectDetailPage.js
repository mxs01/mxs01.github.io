import classes from "./ProjectDetailPage.module.css";

import Backdrop from "../Backdrop/Backdrop";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

import React from "react";
import ReactDOM from "react-dom";

//prop verbindung muss noch hergestellt werden
const ProjectDetailPage = (props) => {
  const portalElement = document.getElementById("modal");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}>
          <ProjectDetail
            title={props.title}
            image={props.image}
            language={props.language}
            description={props.description}
            onClose={props.onClose}
          />
        </Backdrop>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default ProjectDetailPage;
