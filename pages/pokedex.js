import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";
import { slugit, cap } from "../helpers";

export default function pokedex({ pokemons }) {
  return (
    <>
      <Head>
        <title>Pokédex pagina</title>
      </Head>
      <Heading as='h1'>Pokédex</Heading>
      <List>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(6, 1fr)",
          ]}
        >
          {pokemons.map((pokemon, index) => (
            <>
              <Link href={"/pokemon/" + slugit(pokemon.name)}>
                <a className='pokemonName'>
                  <Flex flexDirection='column' alignItems='center'>
                    <figure>
                      <Image
                        src={
                          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                          (index + 1) +
                          ".png"
                        }
                        alt={pokemon.name}
                      />
                    </figure>
                    <ListItem
                      key={index + 1}
                      id={index + 1}
                      fontSize={["sm", "md", "lg", "xl"]}
                    >
                      {index + 1}. {cap(pokemon.name)}
                    </ListItem>
                  </Flex>
                </a>
              </Link>
            </>
          ))}
        </Grid>
      </List>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=900",
  );
  const data = await response.json();
  const pokemons = data.results;
  return {
    props: {
      pokemons,
    },
    revalidate: 3600,
  };
}
