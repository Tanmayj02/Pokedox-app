import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage";
import PokemonCharateristics from "./Component/PokemonCharacteristics";
// import FetchItem from "./FetchPokemon/FetchPokemon";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-light">
        <div className="p-3 text-center bg-light">
          <h1 className="mb-1">Welcome to Pokedox</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/pokemon/:name" element={<PokemonCharateristics />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
