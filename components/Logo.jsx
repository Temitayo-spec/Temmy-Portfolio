import { useRef } from "react";
import styles from "../styles/Logo.module.scss";

const Logo = () => {
  const logoRef = useRef(null);

  return (
    <div className={styles.logo__ctn}>
      <svg
        ref={logoRef}
        viewBox="0 0 125 183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M123.832 15.944V7C123.832 3.68629 121.146 1 117.832 1H7C3.68629 1 1 3.6863 1 7V15.944C1 19.2577 3.68629 21.944 7 21.944H45.896C48.1051 21.944 49.896 23.7349 49.896 25.944V175.432C49.896 178.746 52.5823 181.432 55.896 181.432H69.192C72.5057 181.432 75.192 178.746 75.192 175.432V25.944C75.192 23.7349 76.9829 21.944 79.192 21.944H117.832C121.146 21.944 123.832 19.2577 123.832 15.944Z"
          stroke="#FFD700"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Logo;
