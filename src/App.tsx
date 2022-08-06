import React from "react";
import "./App.css";
import HomePage from "./Component/HomePage";
// import FetchItem from "./FetchPokemon/FetchPokemon";

function App() {
  return (
    <div className="App bg-light">
      <div className="p-3 text-center bg-light">
        <h1 className="mb-1">Welcome to Pokedox</h1>
      </div>
      <HomePage />
      {/* <FetchItem /> */}
    </div>
  );
}

export default App;
