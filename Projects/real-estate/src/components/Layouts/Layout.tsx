import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
