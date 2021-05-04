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
          id="pokeImg"
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
              Ga terug
            </a>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data = await response.json();
  return {
    props: {
      pokemon: data,
    },
  };
}
