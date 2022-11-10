import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="control-items">
          <InputForm />
          <div className="filter">Filter by region</div>
        </div>
      </main>
    </div>
  );
}

export default App;
