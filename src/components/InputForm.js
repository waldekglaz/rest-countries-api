import React from "react";
import styles from "./InputForm.module.css";
import { BiSearch } from "react-icons/bi";

function InputForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search for country" />
      <BiSearch className={styles["search-icon"]} />
    </form>
  );
}

export default InputForm;
