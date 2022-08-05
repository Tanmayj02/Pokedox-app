/* eslint-disable no-alert */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/button-has-type */
import { useState } from "react";

// pokemon
/// data -> name, id, base_experience, abilities, sprites (contains images), stats, weight

// abilities
// data -> effect_entries, id, name, pokemon

// types
/// data -> id, name, pokemon
function FetchItem() {
  const [pokemonList, setPokemonList] = useState<any>([]);

  const getDataFromAPI = () => {
    for (let i = 1; i < 50; i += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((res) => res.json())
        .then((data) => {
          const {
            name,
            id,
            base_experience,
            abilities,
            sprites,
            stats,
            weight,
          } = data;
          setPokemonList((prevState: any) => [
            ...prevState,
            {
              username: name,
              id: id.toString(),
              base_experience,
              abilities,
              //   frontImage: sprites.other.dream_world.front_default,
              //   extraImage: sprites.other.home.front_default,
              sprites,
              stats,
              weight,
            },
          ]);
        });
    }
  };

  const showPokemon = () =>
    pokemonList.map((singlePoke: any) => (
      <div>
        {singlePoke.username}
        {singlePoke.id}
      </div>
    ));

  const putPokemon = (payload: any) => {
    fetch(
      "https://2y2g1bd5wl.execute-api.ap-south-1.amazonaws.com/CorsEnabled/pokemon",
      {
        method: "POST",
        body: JSON.stringify(payload),
        // eslint-disable-next-line @typescript-eslint/comma-dangle
      },
    )
      .then((res) => res.json())
      .then((data) => {
        alert(JSON.stringify(data));
      });
  };

  const putAllPokemon = () => {
    pokemonList.map((pokemon: any) => {
      putPokemon(pokemon);
    });
    // putPokemon(pokemonList);
  };

  //   useEffect(() => {
  //     getDataFromAPI();
  //   }, []);

  return (
    <div>
      <div>
        <button onClick={getDataFromAPI}> FetchPokemons </button>
        <button onClick={putAllPokemon}> PutPokemons </button>
      </div>
      <div>{showPokemon()}</div>
    </div>
  );
}

export default FetchItem;
