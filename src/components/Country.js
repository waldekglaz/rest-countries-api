import React from "react";
import styles from "./Country.module.css";
function Country({ flag, name, population, region, capital, onClick, data }) {
  return (
    <div className={styles.country} onClick={() => onClick(data, name)}>
      <img className={styles.country__img} src={flag} alt={name} />
      <div className={styles["text-content"]}>
        <h2 className={styles["country__name"]}>{name}</h2>
        <ul>
          <li>
            Population:<span>{population}</span>
          </li>
          <li>
            Region:<span>{region}</span>
          </li>
          <li>
            Capital:<span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
