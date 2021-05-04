import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading } from "@chakra-ui/react";

export default function pokedexShiny({ pokemons }) {
  return (
    <>
      <Head>
        <title>Shiny Pokédex pagina</title>
      </Head>
      <Heading textAlign="center" p="1em">
        Pokedex in shiny
      </Heading>
      <ul>
        <Grid templateColumns="repeat(9, 1fr)" gap={6}>
          {pokemons.map((pokemon, index) => (
            <>
              <Link href={"/pokemonShiny/" + pokemon.name}>
                <a className="pokemonName">
                  <Flex flexDirection="column" alignItems="center">
                    <img
                      key={index + 1}
                      src={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                        (index + 1) +
                        ".png"
                      }
                      alt={pokemon.name}
                    />
                    <li key={index + 1} id={index + 1}>
                      {index + 1}. {pokemon.name}
                    </li>
                  </Flex>
                </a>
              </Link>
            </>
          ))}
        </Grid>
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
