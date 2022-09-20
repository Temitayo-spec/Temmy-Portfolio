import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { AnimatedLetters, ContactForm } from "../components";

import styles from "../styles/Contact.module.scss";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

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
        <div className={styles.contact__wrapper}>
          <span className={`${styles.tags} ${styles.top__tags}`}>
            &lt;body&gt;
          </span>
          <div className={styles.contact__inner}>
            <div className={styles.lhs}>
              <div className={styles.text__zone}>
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Contact me".split("")}
                    idx={15}
                  />
                </h1>
                <p>
                  I&apos;m intrested in freelance opportunities - especially
                  ambitious or large projects. However, if you have other
                  request or question, don&apos;t hesitate to contact me using
                  the form below.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className={styles.rhs}>
              <Map />
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
