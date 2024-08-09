import styles from "./Header.module.css";
import { HeaderBackButton } from "../HeaderBackButton/HeaderBackButton";

export const Header = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <HeaderBackButton />
    </header>
  );
};
