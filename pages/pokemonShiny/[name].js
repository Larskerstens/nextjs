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
    </>
  );
}

export async function getServerSideProps(context) {
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
