import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage";
import PokemonCharateristics from "./Component/PokemonCharacteristics";
// import FetchItem from "./FetchPokemon/FetchPokemon";

function App() {
  return (
    <BrowserRouter basename="/pokemon">
      <Container fluid className="App bg-light">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/:name" element={<PokemonCharateristics />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
