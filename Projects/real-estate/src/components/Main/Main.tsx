import styles from "./Main.module.css";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${styles.main}`}>
      <div className={`background`}>
        <div className={`center`}>
          <div className={`items ${styles.itesm}`}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
