import Head from "next/head";

export default function pokedex({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokédex pagina</title>
      </Head>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <>
            <li key={index}>
              <a className="pokemonName">
                {index + 1}. {pokemon.name}
              </a>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                  (index + 1) +
                  ".png"
                }
                alt={pokemon.name}
              />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=900"
  );
  const data = await response.json();
  const pokemons = data.results;
  return {
    props: {
      pokemons: pokemons,
      //pokemon
    },
  };
}
