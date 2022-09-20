import styles from "../styles/Sidebar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCloud,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.sidebar__wrapper}>
      <div className={styles.sidebar__inner}>
        <div className={styles.sidebar__logo}>
          <Link href="/">
            <a>
              <h1>T</h1>
              <p>Tems</p>
            </a>
          </Link>
        </div>
        <div className={styles.sidebar__menu}>
          <ul>
            <li>
              <Link href="/">
                <a className={pathname === "/" && styles.active}>
                  <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={pathname === "/about" && styles.active}>
                  <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={pathname === "/projects" && styles.active}>
                  <FontAwesomeIcon icon={faCloud} color="#4d4d4e" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={pathname === "/contact" && styles.active}>
                  <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sidebar__social}>
          <ul>
            <li>
              <a
                href="https://github.com/Temitayo-spec"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithubAlt} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/OlawanleTemita1"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/temitayo-spec/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
