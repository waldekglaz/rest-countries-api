import React from "react";
import styles from "./DetailPage.module.css";
import { BsArrowLeft } from "react-icons/bs";

function DetailPage({ detailData, data, onClick }) {
  console.log(detailData);
  const curr = Object.values(detailData.currencies);
  const lang = Object.values(detailData.languages).join(", ");
  const nativeNames = Object.values(detailData.name.nativeName);
  const borders = detailData.borders;
  const countryCode = detailData.cca3;
  // const nativeName = detailData.name.nativeName.ara.official;
  const nativeNameParent = detailData.name.nativeName;
  console.log(nativeNames[0].official, "native name");
  const borderCountries = [];
  for (const el in borders) {
    // console.log(borders[el]);

    for (const el2 in data) {
      if (data[el2].cca3 === borders[el]) {
        borderCountries.push(data[el2].name.common);
      }
    }
  }
  // console.log(borderCountries);

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
      <p>
        Border Countries:
        <span>
          {borderCountries.length > 0 ? borderCountries.join(", ") : "None"}
        </span>
      </p>
    </div>
  );
}

export default DetailPage;
