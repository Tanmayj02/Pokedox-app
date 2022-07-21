import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const url: string = "https://pokeapi.co/api/v2/pokemon";

const PokemonCard = () => {
  const [allPokemon, setAllPokemon] = useState<any>([]);

  const fetchPokemon = async () => {
    const initial = await fetch(url);
    const initialJson = await initial.json();
    //console.log(initialJson.results);

    const detailsData = initialJson.results.map(async (i: any) => {
      const preFetchData = await fetch(i.url);
      return preFetchData.json();
    });

    // uncomment this code if you want to see how it looks await Promise.all(detailsData)
    // const response = await Promise.all(detailsData)
    // console.log(response)
    const payload = (await Promise.all(detailsData)).map((data: any) => ({
      //   setAllPokemon({name: data.name,
      //   image: data.sprites["front_default"],})
      name: data.name,
      image: data.sprites["front_default"],
    }));

    //console.log(payload);
    setAllPokemon(payload);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const ShowAllPokemon = () => {
    return allPokemon.map((poke: any) => (
      <Pokemon key={poke.name} name={poke.name} image={poke.image} />
    ));
  };

  return <div> {ShowAllPokemon()}</div>;
};

export default PokemonCard;
