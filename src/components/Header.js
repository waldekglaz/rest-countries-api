import React from "react";
import styles from "./Header.module.css";
import { BsMoon } from "react-icons/bs";

function Header({ theme, themeToggle }) {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button onClick={themeToggle}>
        <BsMoon />
        <span>Dark mode</span>
      </button>
    </header>
  );
}

export default Header;
