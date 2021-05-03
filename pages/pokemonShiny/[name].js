import Link from "next/link";

export default function pokemonDetail({ pokemon }) {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <p>Number: {pokemon.id}</p>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
          pokemon.id +
          ".png"
        }
        alt={pokemon.name}
      />
      <Link href={"../pokedex-shiny#" + (Number(pokemon.id) - 9)}>
        <a>go back</a>
      </Link>
    </>
  );
}

export async function getStaticProps(context) {
  const { name } = context.query;
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species/" + name
  );
  const data = await response.json();
  return {
    props: {
      pokemon: data,
    },
  };
}