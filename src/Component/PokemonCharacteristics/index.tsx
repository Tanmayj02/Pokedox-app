import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function PokemonCharateristics() {
  const { name } = useParams();
  const [pokemondetails, setPokemonDetails] = useState<any>();
  const allPokemons: any = useSelector((state: any) => state.pokemons);
  let currPokemon: any = [];

  const findPokemonDetails = () => {
    currPokemon = allPokemons.filter((pokemon: any) => {
      if (pokemon.username === name) {
        return pokemon;
      }
      return null;
    });
    setPokemonDetails(currPokemon[0]);
  };

  useEffect(() => {
    findPokemonDetails();
  });

  const showPokemonStats = () => {
    const statList = pokemondetails.stats.map((currStat: any) => {
      return (
        <Container>
          <Row>
            <Col lg={3} />
            <Col lg={2} className="bg-secondary text-light">
              <h5 className="text-left"> {currStat.stat.name}</h5>
            </Col>
            <Col lg={4} className="bg-secondary text-light">
              <div
                className="progress progress-bar"
                style={{ width: `${currStat.base_stat}%` }}
              >
                {currStat.base_stat}
              </div>
            </Col>
            <Col lg={3} />
          </Row>
        </Container>
      );
    });

    return statList;
  };

  const showPokemonDetails = () => {
    if (pokemondetails === undefined) {
      return <div> Loading... </div>;
    }
    return (
      <Container>
        <Row>
          <Col lg={3} />
          <Col xs={12} sm={6} md={3} lg={2} className="bg-secondary text-light">
            <h2> {pokemondetails.username}</h2>
          </Col>
          <Col xs={12} sm={6} md={3} lg={4} className="bg-secondary text-light">
            <img
              src={pokemondetails.sprites.other.dream_world.front_default}
              alt={pokemondetails.username}
            />
          </Col>
          <Col lg={3} />
        </Row>
        <Row>
          <Col lg={3} />
          <Col lg={2} className="bg-secondary text-light">
            <h2> Stats </h2>
          </Col>
          <Col lg={4} className="bg-secondary text-light" />
        </Row>
        <Row>{showPokemonStats()}</Row>
      </Container>
    );
  };

  return <div>{showPokemonDetails()} </div>;
}

export default PokemonCharateristics;
