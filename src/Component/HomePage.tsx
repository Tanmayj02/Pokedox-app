import PokemonCard from "./PokemonCard";

function HomePage() {
  return (
    <div>
      <div className="p-3 text-center bg-light">
        <h1 className="mb-1">Welcome to Pokedox</h1>
      </div>
      <PokemonCard />
    </div>
  );
}

export default HomePage;
