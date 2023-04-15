import classes from "./homepage.module.css";
import AnimatedLetters, {
  createAnimatedLetter,
} from "../Animation/AnimatedLetters/animatedLetters";

import { useEffect, useState } from "react";
import { ClassNames } from "@emotion/react";

const Homepage = () => {
  const letterClass = useState("text-animate")[0];

  const firstLine = ["Hi", " ", "I'm", " ", "Max,"];
  const secondLine = [
    "a",
    " ",
    "computer",
    " ",
    "science",
    " ",
    "bachelor",
    " ",
    "student,",
  ];
  const thridLine = [
    "with",
    " ",
    "a",
    " ",
    "passion",
    " ",
    "for",
    " ",
    "algorithms",
    " ",
    "and",
    " ",
    "coding.",
  ];

  return (
    <div className={classes.homepage__main__container}>
      <div className={classes.homepage__content}>
        <div className={classes.letters__container}>
          {createAnimatedLetter(0, firstLine, letterClass)}
          <br />
          {createAnimatedLetter(11, secondLine, letterClass)}
          <br />
          {createAnimatedLetter(47, thridLine, letterClass)}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
