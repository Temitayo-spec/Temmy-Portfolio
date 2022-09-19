import styles from "../styles/Layout.module.scss";
import { Sidebar } from "../components";

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
