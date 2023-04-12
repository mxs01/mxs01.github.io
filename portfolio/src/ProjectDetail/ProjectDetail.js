import classes from "./ProjectDetail.module.css";
import Card from "../Card/Card";
import CodeButton from "../Button/Code-Button/Code_Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";

const ProjectDetail = (props) => {

  const getIcon = () => {
    if (props.language === 'Python'){
      return faPython;
    }
    if (props.language === 'React'){
      return faReact;
    }
    if (props.language === 'JavaScript'){
      return faSquareJs;
    }

    return;
  }

  const getClassName = () => {
    if (props.language === 'Python'){
      return classes.python;
    }
    if (props.language === 'React'){
      return classes.react;
    }
    if (props.language === 'JavaScript'){
      return classes.javaScript;
    }

    return;
  }



  return (
    <div className={classes.projectDetail__container}>
      <Card className={classes.card__container}>
        <div className={classes.programmingLanguageIcon__container}>
          <FontAwesomeIcon className={`${classes.programmingLanguageIcon} ${getClassName()}`} size="2xl"  icon={getIcon()} />
        </div>
        <h1 className={classes.projectDetailTitle}>{props.title}</h1>
        <div className={classes.projectDetailImage__container}>
          <img
            className={classes.projectDetailImage}
            src={props.image}
            alt="picture of the project"
          ></img>
        </div>
        <div className={classes.projectDetailDescription__container}>
          <p className={classes.projectDetailDescription}>
            {props.description}
          </p>
        </div>
        <CodeButton/>
      </Card>
    </div>
  );
};
export default ProjectDetail;
