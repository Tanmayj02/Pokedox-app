import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = [];

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    try {
      let pokemonList: any = [];
      for (let i = 1; i <= 10; i++) {
        const initialResponse = await fetch(
          `https://2y2g1bd5wl.execute-api.ap-south-1.amazonaws.com/Dev/pokemon/${i}`
        );
        const response = await initialResponse.json();
        let currentPokemonDetail: { name: string; image: string } = {
          name: "",
          image: "",
        };
        currentPokemonDetail.name = response.Items[0].username;
        currentPokemonDetail.image =
          response.Items[0].sprites.other.dream_world.front_default;
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
      //console.log("here" + JSON.stringify(action.payload));
      return action.payload;
    });
  },
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
