import Pokemon from "./pokemon";

export default function Home({ params }: { params: { name: string } }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Pokémon !</h1>
      <Pokemon pokemonName={params.name} />
    </div>
  );
}
