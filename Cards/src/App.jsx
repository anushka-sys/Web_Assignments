import React from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
