import styles from "../styles/AnimatedLetters.module.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((letter, index) => {
        return (
          <span key={index} className={`${letterClass} _${index + idx}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
