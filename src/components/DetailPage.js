import React from "react";
import styles from "./DetailPage.module.css";
import { BsArrowLeft } from "react-icons/bs";

function DetailPage({ detailData, data, onClick }) {
  // Catching nested data
  const curr = Object.values(detailData.currencies);
  const lang = Object.values(detailData.languages).join(", ");
  const nativeNames = Object.values(detailData.name.nativeName);
  const borders = detailData.borders;
  const countryCode = detailData.cca3;

  // creating array of neighbour countries full names
  const borderCountries = [];
  for (const el in borders) {
    for (const el2 in data) {
      if (countryCode === borders[el]) {
        borderCountries.push(data[el2].name.common);
      }
    }
  }

  return (
    <div className={styles["detail-page"]}>
      <button type="button" onClick={onClick}>
        <BsArrowLeft />
        Back
      </button>
      <img src={detailData.flags.png} />
      <h2>{detailData.name.common}</h2>
      <ul>
        <li>
          Native Name: <span>{nativeNames[0].official}</span>
        </li>
        <li>
          Population: <span>{detailData.population}</span>
        </li>
        <li>
          Region: <span>{detailData.region}</span>
        </li>
        <li>
          Sub Region: <span>{detailData.subregion}</span>
        </li>
        <li style={{ marginBottom: "42px" }}>
          Capital: <span>{detailData.capital}</span>
        </li>
        <li>
          Top Level Domain: <span>{detailData.tld}</span>
        </li>
        <li>
          Currencies: <span>{curr[0].name}</span>
        </li>
        <li>
          Languages: <span>{lang}</span>
        </li>
      </ul>
      <div className={styles["borders-wrapper"]}>
        <p>Border Countries:</p>
        <div className={styles.borders}>
          {borderCountries.length === 0 && (
            <span className={styles.border}>None</span>
          )}
          {borderCountries.length > 0 &&
            borderCountries.map((country) => {
              return (
                <span className={styles.border} key={country}>
                  {country}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
