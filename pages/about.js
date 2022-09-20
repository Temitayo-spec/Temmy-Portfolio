import styles from "../styles/About.module.scss";
import { AnimatedLetters } from "../components";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text__animate");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className={styles.about__ctn}>
          <div className={styles.about__inner}>
            <span className={`${styles.tags} ${styles.top__tags}`}>
              &lt;body&gt;
            </span>
            <div className={styles.flex__ctn}>
              <div className={styles.text__zone}>
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"About me".split("")}
                    idx={15}
                  />
                </h1>
                <p>
                  I&apos;m a full stack web developer (Frontend Heavy) with a
                  passion for creating beautiful and functional websites.
                </p>
                <p>
                  I&apos;m very ambitious and I&apos;m looking for a role in an
                  established IT company with the oportunity to work with the
                  latest technologies on challenging and diverse projects.
                </p>
                <p>
                  I&apos;m quite confident, naturally curious and pertually
                  working on improving my skills one step at a time. I&apos;m
                  currently working as a freelance web developer and looking for
                  new opportunities.
                </p>
              </div>

              <div className={styles.skills__cube}>
                <div className={styles.cube__spinner}>
                  <div className={styles.face__1}>
                    <FontAwesomeIcon icon={faReact} color="#61dafb" size="3x" />
                  </div>
                  <div className={styles.face__2}>
                    <FontAwesomeIcon
                      icon={faCss3}
                      color="
                #264de4"
                      size="3x"
                    />
                  </div>
                  <div className={styles.face__3}>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      color="
                #e34c26"
                      size="3x"
                    />
                  </div>
                  <div className={styles.face__4}>
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      color="
                #f0db4f"
                      size="3x"
                    />
                  </div>
                  <div className={styles.face__5}>
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      color="
                #3c873a"
                      size="3x"
                    />
                  </div>
                  <div className={styles.face__6}>
                    <FontAwesomeIcon icon={faSass} color="#cc6699" size="3x" />
                  </div>
                </div>
              </div>
            </div>
            <span className={`${styles.tags} ${styles.bottom__tags}`}>
              &lt;/body&gt;
              <br />
              <span className={styles.bottom__tag__html}>&lt;/html&gt;</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
