import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Skeleton } from "@chakra-ui/react";

export default function pokedex({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokédex pagina</title>
      </Head>
      <Heading textAlign="center" p="1em">
        Pokedex
      </Heading>
      <ul>
        <Grid templateColumns="repeat(9, 1fr)" gap={6}>
          {pokemons.map((pokemon, index) => (
            <>
              <Link href={"/pokemon/" + pokemon.name}>
                <a className="pokemonName">
                  <Flex flexDirection="column" alignItems="center">
                    <Skeleton isLoaded>
                      <img
                        key={index + 1}
                        src={
                          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                          (index + 1) +
                          ".png"
                        }
                        alt={pokemon.name}
                      />
                    </Skeleton>

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
