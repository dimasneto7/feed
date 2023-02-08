import styles from "./Header.module.css";

import logoFeed from "../assets/logoFeed.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoFeed} alt="React Feed" />
      </header>
    </>
  );
}
