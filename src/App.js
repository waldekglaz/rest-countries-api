import React from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <InputForm />
      </main>
    </div>
  );
}

export default App;
