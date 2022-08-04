import { stat } from "fs/promises";
import { useEffect, useState } from "react";

// pokemon
/// data -> name, id, base_experience, abilities, sprites (contains images), stats, weight

// abilities
// data -> effect_entries, id, name, pokemon

// types
/// data -> id, name, pokemon
const FetchItem = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);

  const getDataFromAPI = () => {
    for (let i = 1; i < 2; i++) {
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
              itemName: name,
              id: id.toString(),
              base_experience: base_experience,
              abilities: abilities,
              //   frontImage: sprites.other.dream_world.front_default,
              //   extraImage: sprites.other.home.front_default,
              sprites: sprites,
              stats: stats,
              weight: weight,
            },
          ]);
        });
    }
  };

  const showPokemon = () => {
    return pokemonList.map((singlePoke: any) => (
      <div>
        {singlePoke.itemName}
        {singlePoke.id}
      </div>
    ));
  };

  const putPokemon = (payload: any) => {
    fetch(
      "https://2y2g1bd5wl.execute-api.ap-south-1.amazonaws.com/CorsEnabled/pokemon/",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
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
};

export default FetchItem;
