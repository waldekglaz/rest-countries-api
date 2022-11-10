import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Filter from "./components/Filter";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="control-items">
          <InputForm />
          <Filter />
        </div>
      </main>
    </div>
  );
}

export default App;
