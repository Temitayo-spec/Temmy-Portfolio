import styles from "../styles/About.module.scss";
import { AnimatedLetters } from "../components";

const about = () => {
  return (
    <div className={styles.about__ctn}>
      <div className={styles.inner}>
        <div className={styles.text__zone}>
          <h1>
            <AnimatedLetters strArray={"About me".split("")} idx={15} />
          </h1>
          <p>
            I&apos;m a full stack web developer (Frontend Heavy) with a passion
            for creating beautiful and functional websites.
          </p>
          <p>
            I&apos;m very ambitious and I&apos;m looking for a role in an
            established IT company with the oportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I&apos;m quite confident, naturally curious and pertually working on
            improving my skills one step at a time. I&apos;m currently working
            as a freelance web developer and looking for new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
