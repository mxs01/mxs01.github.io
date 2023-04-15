import classes from "./aboutMe.module.css";
import logo from "./profilePicture.JPG";
import AnimatedLetters, {createAnimatedLetter} from "../Animation/AnimatedLetters/animatedLetters";
import { useState } from "react";

const AboutMe = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const aboutMeText = [
    "Hi",
    " ",
    "I'm",
    " ",
    "Max",
    ",",
    " ",
    "currently",
    " ",
    "I'm",
    " ",
    "in",
    " ",
    "my",
    " ",
    "fourth",
    " ",
    "semester",
    " ",
    "at",
    " ",
    "University",
    " ",
    "of",
    " ",
    "Tübingen",
    " ",
    "in",
    " ",
    "Germany",
    ".",
    " ",
    "I'm",
    " ",
    "21",
    " ",
    "years",
    " ",
    "old",
    " ",
    "and",
    " ",
    "I'm",
    " ",
    "passionate",
    " ",
    "about",
    " ",
    "learning",
    " ",
    "new",
    " ",
    "things",
    ",",
    " ",
    "developing",
    " ",
    "skills",
    " ",
    "and",
    " ",
    "meeting",
    " ",
    "new",
    " ",
    "interesting",
    " ",
    "people.",
  ];

 

  return (
    <div className={classes.aboutMe__container}>
      <div className={classes.aboutMe__container__image}>
        <img src={logo} className={classes.aboutMe__picture} />
      </div>
      <p className={classes.aboutMe__info}>
        {createAnimatedLetter(0, aboutMeText, letterClass)}
      </p>
    </div>
  );
};
export default AboutMe;
