import "./animatedLetters.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray.map((char, idx) => {
        return (
          <span key={index + idx} className={`${letterClass} _${index +idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
