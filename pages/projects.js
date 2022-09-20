import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { AnimatedLetters } from "../components";
import { ProjectCards } from "../components";
import { dataList } from "../components/ProjectData";

import styles from "../styles/Projects.module.scss";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text__animate");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);

    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className={styles.project__wrapper}>
          <span className={`${styles.tags} ${styles.top__tags}`}>
            &lt;body&gt;
          </span>
          <div className={styles.project__inner}>
            <div className={styles.lhs}>
              <div className={styles.text__zone}>
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"My Projects".split("")}
                    idx={15}
                  />
                </h1>
                <p>List of projects I&apos;ve worked on.</p>
              </div>
            </div>

            <div className={styles.projects__list}>
              {dataList.map((data) => (
                <ProjectCards key={data.id} data={data} />
              ))}
            </div>
          </div>
          <span className={`${styles.tags} ${styles.bottom__tags}`}>
            &lt;/body&gt;
            <br />
            <span className={styles.bottom__tag__html}>&lt;/html&gt;</span>
          </span>
        </div>
      )}
    </>
  );
};

export default Contact;
