import { useSelector } from "react-redux";
import Pokemon from "./Pokemon";

function PokemonCard() {
  const ShowAllPokemon = () => {
    const allPokemons: any = useSelector((state: any) => state.pokemons);

    return allPokemons.map((singlePoke: { name: string; image: string }) => (
      <Pokemon
        key={singlePoke.name}
        name={singlePoke.name}
        image={singlePoke.image}
      />
    ));
  };

  return <div>{ShowAllPokemon()}</div>;
}

export default PokemonCard;
