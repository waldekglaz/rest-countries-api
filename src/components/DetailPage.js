import React from "react";

function DetailPage({ detailData, data, onClick }) {
  console.log(detailData);
  const curr = Object.values(detailData.currencies);
  const lang = Object.values(detailData.languages).join(", ");
  const borders = detailData.borders;
  const countryCode = detailData.cca3;
  console.log(countryCode, "country Code");
  const borderCountries = [];
  for (const el in borders) {
    console.log(borders[el]);

    for (const el2 in data) {
      if (data[el2].cca3 === borders[el]) {
        borderCountries.push(data[el2].name.common);
      }
    }
  }
  console.log(borderCountries);

  return (
    <div className="detail-page">
      <button type="button" onClick={onClick}>
        Back
      </button>
      <img src={detailData.flags.png} />
      <h2>{detailData.name.common}</h2>
      <ul>
        <li>
          Native Name: <span>{detailData.altSpellings.at(-1)}</span>
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
        <li>
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
