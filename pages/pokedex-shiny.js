import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Image, List, ListItem } from "@chakra-ui/react";
import { slugit, cap } from "../helpers";

export default function pokedexShiny({ pokemons }) {
  return (
    <>
      <Head>
        <title>Shiny Pokédex pagina</title>
      </Head>
      <Heading textAlign='center' p='1em'>
        Pokedex in shiny
      </Heading>
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
              <Link href={"/pokemonShiny/" + slugit(pokemon.name)}>
                <a className='pokemonName'>
                  <Flex flexDirection='column' alignItems='center'>
                    <Image
                      key={index + 1}
                      src={
                        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" +
                        (index + 1) +
                        ".png"
                      }
                      alt={pokemon.name}
                    />
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
      <p id='test'>hallo</p>
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
      pokemons: pokemons,
      //pokemon
    },
  };
}
