import Link from "next/link";
import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
export default function pokemonDetail({ pokemon }) {
  return (
    <>
      <Head>
        <title>{pokemon.name} pagina</title>
      </Head>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading padding=".5em">{pokemon.name}</Heading>
        <p>Number: {pokemon.id}</p>
        <img
          className="pokeImg"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <p>Type: {pokemon.types.map((n) => n.type.name).join(", ")}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Height: {pokemon.height}</p>
        <Link href={"../pokedex#" + (Number(pokemon.id) - 9)}>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
            marginTop="3em"
            border="1px solid #a53333"
            padding=".5em .8em"
            borderRadius="10px"
          >
            <a>
              <ArrowBackIcon marginRight="1em" />
              Terug naar pokédex overzicht
            </a>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemon = await response.json();
  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=900"
  );
  const data = await response.json();
  const pokemons = data.results;
  return {
    paths: pokemons.map((pokemon) => ({
      params: { name: pokemon.name },
    })),
    fallback: "blocking",
  };
}
