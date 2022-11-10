import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";
import axios from "axios";

import "./App.css";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="control-items">
          <InputForm />
          <Filter />
        </div>
        {data &&
          data.map((country) => {
            return <div>{country.altSpellings[1]}</div>;
          })}
      </main>
    </div>
  );
}

export default App;
