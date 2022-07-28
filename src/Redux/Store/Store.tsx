import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../ReduxSlice/PokemonSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export default store;
