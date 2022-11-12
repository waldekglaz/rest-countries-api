import React from "react";
import styles from "./Header.module.css";
import { BsMoon, BsSun } from "react-icons/bs";

function Header({ theme, themeToggleHandler }) {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button onClick={themeToggleHandler}>
        {theme !== "light" ? <BsSun /> : <BsMoon />}
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </button>
    </header>
  );
}

export default Header;
