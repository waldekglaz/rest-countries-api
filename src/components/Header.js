import React from "react";
import styles from "./Header.module.css";
import { BsMoon } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button>
        <BsMoon />
        <span>Dark mode</span>
      </button>
    </header>
  );
}

export default Header;
