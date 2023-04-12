import classes from './Code_Button.module.css'
import { Link } from 'react-router-dom';
import { props } from 'bluebird';

const CodeButton = (props) => {
    return <Link className={classes.code__button__link} to={props.link}>Code</Link>;
}

export default CodeButton;