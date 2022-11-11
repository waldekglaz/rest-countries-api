import React from "react";
import styles from "./InputForm.module.css";
import { BiSearch } from "react-icons/bi";

function InputForm({ onSubmit, value, onChange }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for country"
        value={value}
        onChange={onChange}
      />
      <BiSearch className={styles["search-icon"]} />
    </form>
  );
}

export default InputForm;
