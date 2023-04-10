import classes from "./aboutMe.module.css";
import logo from "./profilePicture.JPG";
import AnimateLetters from "../Animation/AnimatedLetters/animatedLetters";
import { useState } from "react";

const AboutMe = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const firstLine = "Hi I'm Max,".split("");
  const secondLine =
    "currently I'm in my fourth semester at University of Tübingen in Germany.".split(
      ""
    );
  const thirdLine =
    "I'm 21 years old and I'm passionate about learning new things,".split("");
  const fourthLine =
    "developing skills and meeting new interesting people.".split("");

  return (
    <div className={classes.aboutMe__container}>
      <div className={classes.aboutMe__container__image}>
        <img src={logo} className={classes.aboutMe__picture} />
      </div>
      <p className={classes.aboutMe__info}>
        <AnimateLetters
          letterClass={letterClass}
          strArray={firstLine}
          index={4}
        />
        <br/>
        <AnimateLetters
          letterClass={letterClass}
          strArray={secondLine}
          index={15}
        />
        <br/>
        <AnimateLetters
          letterClass={letterClass}
          strArray={thirdLine}
          index={80}
        />
        <br/>
        <AnimateLetters
          letterClass={letterClass}
          strArray={fourthLine}
          index={150}
        />
      </p>
    </div>
  );
};
export default AboutMe;
