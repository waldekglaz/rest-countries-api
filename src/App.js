import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";
import DetailPage from "./components/DetailPage";
import List from "./components/List";
import axios from "axios";
import useLocalStorage from "use-local-storage";
import "./App.css";

const FILTER_MAP = {
  All: () => true,
  Africa: (region) => region.region === "Africa",
  Asia: (region) => region.region === "Asia",
  Europe: (region) => region.region === "Europe",
  Oceania: (region) => region.region === "Oceania",
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDetailPageVisible, setIsDetailPageVisible] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
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
  console.log(data);
  const onCountryClick = (data, item) => {
    setIsFilterOpened(false);
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

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} themeToggle={themeToggle} />
      <main className="main">
        {!isDetailPageVisible && (
          <React.Fragment>
            <div className="control-items">
              <InputForm
                onSubmit={onFormSubmitHandler}
                value={inputValue}
                onChange={inputHandler}
              />
              <Filter
                onClick={onFilterClick}
                isFilterOpened={isFilterOpened}
                names={FILTER_NAMES}
                setFilter={setFilter}
                setIsFilterOpened={setIsFilterOpened}
              />
            </div>
            <div
              className="country-list"
              onClick={() => setIsFilterOpened(false)}
            >
              {loading && <div>A moment please...</div>}
              {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
              )}
              {data && (
                <List
                  data={data}
                  onClick={onCountryClick}
                  input={inputText}
                  filter={filter}
                  filterMap={FILTER_MAP}
                />
              )}
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
