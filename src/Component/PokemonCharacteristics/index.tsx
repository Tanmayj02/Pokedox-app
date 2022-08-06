import { useParams } from "react-router-dom";

function PokemonCharateristics() {
  const { id } = useParams();
  // id is string

  return <div> {id} </div>;
}

export default PokemonCharateristics;
