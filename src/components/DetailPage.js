import React from "react";
import styles from "./DetailPage.module.css";
import { BsArrowLeft } from "react-icons/bs";

function DetailPage({ detailData, data, onClick, onBorderClickHandler }) {
  // Catching nested data
  const curr = Object.values(detailData.currencies);
  const lang = Object.values(detailData.languages).join(", ");
  const nativeNames = Object.values(detailData.name.nativeName);
  const borders = detailData.borders;

  // creating array of neighbour countries full names based on coutry code
  const borderCountries = [];
  for (const i in borders) {
    for (const index in data) {
      if (data[index].cca3 === borders[i]) {
        borderCountries.push(data[index].name.common);
      }
    }
  }

  return (
    <div className={styles["detail-page"]}>
      <button type="button" onClick={onClick}>
        <BsArrowLeft style={{ marginRight: 10 }} />
        Back
      </button>
      <div className={styles["country-wrapper"]}>
        <img src={detailData.flags.png} alt={detailData.name.common} />
        <div className={["text-content"]}>
          <h2>{detailData.name.common}</h2>
          <div className={styles["list-container"]}>
            <ul>
              <li>
                Native Name: <span>{nativeNames[0].official}</span>
              </li>
              <li>
                Population:{" "}
                <span>{detailData.population.toLocaleString()}</span>
              </li>
              <li>
                Region: <span>{detailData.region}</span>
              </li>
              <li>
                Sub Region: <span>{detailData.subregion}</span>
              </li>
              <li>
                Capital: <span>{detailData.capital}</span>
              </li>
            </ul>

            <ul>
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
          </div>
          <div className={styles["borders-wrapper"]}>
            <p>Border Countries:</p>
            <div className={styles.borders}>
              {borderCountries.length === 0 && (
                <span className={styles.border}>None</span>
              )}
              {borderCountries.length > 0 &&
                borderCountries.map((country) => {
                  return (
                    <span
                      onClick={onBorderClickHandler}
                      className={styles.border}
                      key={country}
                    >
                      {country}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
