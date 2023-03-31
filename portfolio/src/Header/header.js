import classes from "./header.module.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes["nav-bar__container"]}>
      <Link to="/" className={classes["nav-bar__title"]}>
        <h1>Maximilian Schnitt</h1>
      </Link>
      <nav className={classes["nav-bar__items"]}>
        <NavLink
          className={({isActive}) => isActive ? classes.active:classes['nav-bar__item']}
          to="/about-me"
        >
          About Me
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? classes.active:classes['nav-bar__item']}
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? classes.active:classes['nav-bar__item']}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          className={({isActive}) => isActive ? classes.active:classes['nav-bar__item']}
          to="/contact-me"
        >
          Contact Me
        </NavLink>
      </nav>
    </div>
  );
};
export default Header;
