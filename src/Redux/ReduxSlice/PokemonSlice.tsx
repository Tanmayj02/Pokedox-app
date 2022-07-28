import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = [];

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    try {
      let pokemonList: any = [];
      for (let i = 1; i <= 20; i++) {
        const initialResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i}`
        );
        const response = await initialResponse.json();
        let currentPokemonDetail: { name: string; image: string } = {
          name: "",
          image: "",
        };
        currentPokemonDetail.name = response.name;
        currentPokemonDetail.image =
          response.sprites.other.dream_world.front_default;
        pokemonList.push(currentPokemonDetail);
      }
      return pokemonList;
    } catch (error: any) {
      return error.message;
    }
  }
);

const pokemonsSlice: any = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
