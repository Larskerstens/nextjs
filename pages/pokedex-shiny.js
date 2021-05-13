import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Image } from "@chakra-ui/react";
import { slugit, cap } from "../helpers";

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
              <Link href={"/pokemonShiny/" + slugit(pokemon.name)}>
                <a className="pokemonName">
                  <Flex flexDirection="column" alignItems="center">
                    <Image
                      key={index + 1}
                      src={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                        (index + 1) +
                        ".png"
                      }
                      alt={pokemon.name}
                    />
                    <li key={index + 1} id={index + 1}>
                      {index + 1}. {cap(pokemon.name)}
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

export async function getStaticProps() {
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
