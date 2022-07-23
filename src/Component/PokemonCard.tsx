import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pokemon from "./Pokemon";

const PokemonCard = () => {
  const [allPokemon, setAllPokemon] = useState<any>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [previousUrl, setPreviousUrl] = useState<string>("");
  const [currUrl, setCurrUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const fetchPokemon = async () => {
    const initialResponse = await fetch(currUrl);
    const initialResponseJson = await initialResponse.json();
    setNextUrl(initialResponseJson.next);
    setPreviousUrl(initialResponseJson.previous);

    const allPokeData = initialResponseJson.results.map(
      async (pokeInitDetail: any) => {
        const pokeInitData = await fetch(pokeInitDetail.url);
        return pokeInitData.json();
      }
    );
    // https://pokeapi.co/api/v2/encounter-method/{id or name}/
    const payload = (await Promise.all(allPokeData)).map((singlePoke: any) => ({
      name: singlePoke.name,
      image: singlePoke.sprites.other.dream_world.front_default,
      height: singlePoke.height,
      weight: singlePoke.weight,
      attack: singlePoke.stats[0].base_stat,
    }));

    console.log(payload);
    setAllPokemon(payload);
  };

  useEffect(() => {
    fetchPokemon();
  }, [currUrl]);

  const ShowAllPokemon = () => {
    return allPokemon.map((singlePoke: { name: string; image: string }) => (
      <Pokemon
        key={singlePoke.name}
        name={singlePoke.name}
        image={singlePoke.image}
      />
    ));
  };

  const prevButton = () => {
    if (previousUrl)
      return (
        <div>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setCurrUrl(previousUrl);
            }}
          >
            Previous Page
          </button>
        </div>
      );
    else return null;
  };

  const nextButton = () => {
    if (nextUrl)
      return (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            setCurrUrl(nextUrl);
          }}
        >
          next Page
        </button>
      );
    else return null;
  };

  return (
    <div>
      {ShowAllPokemon()}
      {prevButton()}
      {nextButton()}
    </div>
  );
};

export default PokemonCard;
