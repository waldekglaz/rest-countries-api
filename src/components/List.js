import React from "react";
import Country from "./Country";
import uniqid from "uniqid";

function List({ data, onClick, input }) {
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
    <div>
      {filteredData.map((country) => {
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
      })}
    </div>
  );
}

export default List;
