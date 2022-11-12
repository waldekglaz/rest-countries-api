import React from "react";
import { BiChevronDown } from "react-icons/bi";
import styles from "./Filter.module.css";

function Filter({
  onClick,
  isFilterOpened,
  names,
  setFilter,
  setIsFilterOpened,
}) {
  const filterList = names.map((name) => {
    return (
      <li
        key={name}
        name={name}
        onClick={() => {
          setFilter(name);
          setIsFilterOpened(false);
        }}
      >
        {name}
      </li>
    );
  });
  return (
    <div className={styles["filter-container"]}>
      <button className={styles.filter} onClick={onClick}>
        Filter by Region <BiChevronDown />
      </button>

      <ul
        className={`${styles.filters} ${isFilterOpened ? styles.active : ""}`}
      >
        {filterList}
      </ul>
    </div>
  );
}

export default Filter;
