import "./animatedLetters.scss";

export function createAnimatedLetter(index, strArray, lClass) {
  let idx = index;

  return strArray.map((word) => {
    const wordArray = word.split("");

    const component = (
      <AnimatedLetters
        letterClass={lClass}
        strArray={wordArray}
        startingIndex={idx}
      />
    );

    idx += word.length;

    return component;
  });
}


const AnimatedLetters = ({
  letterClass,
  strArray,
  startingIndex,
}) => {
  

  return (
    <p className="animated__text__container">
      {strArray.map((char, idx) => {
        return (
          <span
            key={startingIndex + idx}
            className={`${letterClass} _${startingIndex + idx}`}
          >
            {char}
          </span>
        );
      })}

    </p>
  );
};

export default AnimatedLetters;
