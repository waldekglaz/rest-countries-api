import React from "react";

function Country({ flag, name, population, region, capital }) {
  return (
    <div>
      <img src={flag} />
      <h2>{name}</h2>
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
  );
}

export default Country;
