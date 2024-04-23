import { Suspense } from "react";
import Pokemon from "./pokemon";


function Loading(){
  return (
    <div>Loading...</div>
  )
}


export default function Home({ params }: { params: { name: string } }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Pokémon !</h1>
      <Suspense fallback={<Loading/>}>
        <Pokemon pokemonName={params.name} />
      </Suspense>
    </div>
  );
}
