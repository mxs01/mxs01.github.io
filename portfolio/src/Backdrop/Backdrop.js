import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}>{props.children}</div>;
};

export default Backdrop;