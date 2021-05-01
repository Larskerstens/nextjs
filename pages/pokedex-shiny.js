import Head from "next/head";
import Link from "next/link";

export default function pokedex({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokédex pagina</title>
      </Head>
      <h1>Pokedex</h1>
      <p>
        <a href="#test">ga naar test</a>
      </p>
      <ul>
        {pokemons.map((pokemon, index) => (
          <>
            <img
              key={index + 1}
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                (index + 1) +
                ".png"
              }
              alt={pokemon.name}
            />
            <Link href={"/pokemonShiny/" + pokemon.name}>
              <li key={index + 1} id={index + 1}>
                <a className="pokemonName">
                  {index + 1}. {pokemon.name}
                </a>
              </li>
            </Link>
          </>
        ))}
      </ul>
      <p id="test">hallo</p>
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
