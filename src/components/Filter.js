import React from "react";
import { BiChevronDown } from "react-icons/bi";
import styles from "./Filter.module.css";

function Filter({ onClick, isFilterOpened }) {
  return (
    <div className={styles["filter-container"]}>
      <button className={styles.filter} onClick={onClick}>
        Filter by Region <BiChevronDown />
      </button>

      <ul
        className={`${styles.filters} ${isFilterOpened ? styles.active : ""}`}
      >
        <li>Africa</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  );
}

export default Filter;
