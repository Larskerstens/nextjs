import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading } from "@chakra-ui/react";
//import axios from "axios";

export default function cocktail({ cocktails }) {
  return (
    <>
      <Head>
        <title>Cocktail pagina</title>
      </Head>
      <Heading textAlign="center" p="1em">
        Cocktail
      </Heading>
      {
        <ul>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {cocktails.map((cocktail) => (
              <>
                <Link href={"/cocktail/" + cocktail.strDrink}>
                  <a className="cocktailName">
                    <Flex flexDirection="column" alignItems="center">
                      <li key={cocktail.idDrink}>{cocktail.strDrink}</li>

                      <img
                        id="cocktailImg"
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
      }
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c"
  );
  const data = await response.json();
  const cocktails = data.drinks;
  return {
    props: {
      cocktails: cocktails,
      //cocktails
    },
  };
}
