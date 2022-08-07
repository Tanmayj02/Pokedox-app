import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pokemon from "./Pokemon";

function PokemonCard() {
  const ShowAllPokemon = () => {
    const allPokemons: any = useSelector((state: any) => state.pokemons);

    return allPokemons.map((singlePoke: any) => (
      <Pokemon
        key={singlePoke.username}
        name={singlePoke.username}
        image={singlePoke.sprites.other.dream_world.front_default}
      />
    ));
  };
  return (
    <Container fluid>
      <Row>{ShowAllPokemon()}</Row>
    </Container>
  );
}

export default PokemonCard;
