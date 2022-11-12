import React from "react";
import Country from "./Country";
import uniqid from "uniqid";
import styles from "./List.module.css";

function List({ data, onClick, input, filter, filterMap }) {
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.common.toLowerCase().includes(input);
    }
  });

  return (
    <div className={styles["country-list"]}>
      {filteredData.length > 0 ? (
        filteredData.filter(filterMap[filter]).map((country) => {
          return (
            <Country
              key={uniqid()}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
              onClick={onClick}
              data={data}
            />
          );
        })
      ) : (
        <p style={{ fontSize: "32px", position: "absolute", top: "50%" }}>
          No Country Found
        </p>
      )}
    </div>
  );
}

export default List;
