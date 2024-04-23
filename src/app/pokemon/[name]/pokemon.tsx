interface Props {
  pokemonName: string;
}

interface PokemonApi {
  sprites: { front_default: string };
  name: string;
  order: number;
  abilities: { name: string }[]
}

async function getData(pokemonName: string): Promise<PokemonApi> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  await new Promise((resolve) => setTimeout(() => resolve({}), 5000));
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function Pokemon(props: Props) {
  const data = await getData(props.pokemonName);
  console.log(data.abilities);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={data.sprites.front_default}
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <h5 style={{fontSize: '115%'}}>{data.name.toUpperCase()}</h5>
    </div>
  )
}