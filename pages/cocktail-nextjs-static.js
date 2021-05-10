import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Image } from "@chakra-ui/react";
import { slugit } from "../helpers";

export default function cocktail({ cocktails }) {
  return (
    <>
      <Head>
        <title>Cocktail pagina</title>
      </Head>
      <Heading as="h1">Cocktail-Static</Heading>

      <ul>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {cocktails.map((cocktail) => (
            <>
              <Link
                href={
                  "/cocktailNextjsStatic/" +
                  cocktail.idDrink +
                  "/" +
                  slugit(cocktail.strDrink)
                }
              >
                <a className="cocktailName">
                  <Flex flexDirection="column" alignItems="center">
                    <li key={cocktail.idDrink}>{cocktail.strDrink}</li>

                    <Image
                      className="cocktailImg"
                      src={cocktail.strDrinkThumb}
                      alt={cocktail.strDrink}
                    />
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
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l"
  );
  const data = await response.json();
  const cocktails = data.drinks;
  return {
    props: {
      cocktails,
    },
  };
}
