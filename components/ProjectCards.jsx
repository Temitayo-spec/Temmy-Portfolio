/* eslint-disable @next/next/no-img-element */
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/ProjectCards.module.scss";

const ProjectCards = ({
  data: { image, title, description, github, link },
}) => {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__inner}>
        <div className={styles.card__image}>
          <img src={image} alt="images" />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>
            {description}
          </p>
          <div className={styles.card__links}>
            <a href={github} className={styles.card__link}>
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <a href={link} className={styles.card__link}>
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
