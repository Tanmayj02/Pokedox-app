import { useEffect, useState } from "react";

const FetchItem = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1/";
  const [pokemonList, setPokemonList] = useState<any>([]);

  const getDataFromAPI = () => {
    for (let i = 1; i < 500; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((res) => res.json())
        .then((data) => {
          setPokemonList((prevState: any) => [
            ...prevState,
            { username: data.name, id: i },
          ]);
        });
    }
  };

  const showPokemon = () => {
    return pokemonList.map((singlePoke: any) => (
      <div>
        {singlePoke.username}
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
