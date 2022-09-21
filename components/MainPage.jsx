import Link from "next/link";
import styles from "../styles/MainPage.module.scss";
import { useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { useEffect } from "react";
import Logo from "./Logo";

const MainPage = () => {
  const [letterClass, setLetterClass] = useState("text__animate");
  const nameArray = "emitayo".split("");
  const jobArray = " A Web Developer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 5000);
  }, []);
  return (
    <div className={styles.home__wrapper}>
      <div className={styles.home__inner}>
        <div className={styles.text__zone}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            , <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>’</span>
            <span className={`${letterClass} _15`}>m</span>
            {"  "}
            <span className={styles.name}>T</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            ,
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <span>.</span>
          </h1>
          <h2>Frontend Developer / Chemical Engineer</h2>
          <p>
            I&apos;m a frontend developer with a passion for building beautiful
            and functional <span>websites.</span>
          </p>
          <div className={styles.links__ctn}>
            <Link href="/contact">
              <a className={styles.btn}>Contact Me</a>
            </Link>
            <a
              href="/assets/temitayo-resume.pdf"
              className={styles.btn}
              download
              style={{ marginLeft: "1rem" }}
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className={styles.image__zone}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
