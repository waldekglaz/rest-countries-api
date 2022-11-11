import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";
import Country from "./components/Country";
import DetailPage from "./components/DetailPage";
import axios from "axios";
import uniqid from "uniqid";

import "./App.css";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDetailPageVisible, setIsDetailPageVisible] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  const onCountryClick = (data, item) => {
    const [country] = data.filter((country) => country.name.common === item);
    setDetailData(country);
    setIsDetailPageVisible(true);
  };
  const onDetailPageClose = () => {
    setIsDetailPageVisible(false);
    setDetailData(null);
    setInputValue("");
  };
  const onFilterClick = () => {
    setIsFilterOpened(!isFilterOpened);
  };
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeInputValueHandler = (e) => {
    setInputValue(e.target.value);

    if (e.target.value === "") {
      setData(data);
      return;
    }
    // const searched = data.filter((item) => {
    //   console.log(inputValue.toLowerCase());
    //   return item.name.common.toLowerCase() === e.target.value.toLowerCase();
    // });
    // setData(searched);
    const searchResults = [];
    const size = e.target.value.length;
    data.forEach((el) => {
      if (
        el.name.common.slice(0, size).toLowerCase() ===
        e.target.value.toLowerCase()
      ) {
        searchResults.push(el);
      }
    });
    setData(searchResults);
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        {!isDetailPageVisible && (
          <React.Fragment>
            <div className="control-items">
              <InputForm
                onSubmit={onFormSubmitHandler}
                value={inputValue}
                onChange={onChangeInputValueHandler}
              />
              <Filter onClick={onFilterClick} isFilterOpened={isFilterOpened} />
            </div>
            <div className="country-list">
              {loading && <div>A moment please...</div>}
              {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
              )}
              {data &&
                data.map((country) => {
                  return (
                    <Country
                      key={uniqid()}
                      name={country.name.common}
                      flag={country.flags.png}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                      onClick={onCountryClick}
                      data={data}
                    />
                  );
                })}
            </div>
          </React.Fragment>
        )}
        {isDetailPageVisible && (
          <DetailPage
            detailData={detailData}
            onClick={onDetailPageClose}
            data={data}
          />
        )}
      </main>
    </div>
  );
}

export default App;
