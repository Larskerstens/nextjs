import Link from "next/link";
import Head from "next/head";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { slugit } from "../../helpers";

export default function cocktailDetail({ cocktail }) {
  return (
    <>
      <Head>
        <title>{cocktail.strDrink} pagina</title>
      </Head>
      <Flex>
        <Image
          boxSize="800px"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <Flex flexDirection="column" marginLeft="2em">
          <Heading padding="1em 0">{cocktail.strDrink}</Heading>
          <p>{cocktail.strInstructions}</p>
          <Flex alignItems="center">
            <Link href={"../cocktail-nextjs-static"}>
              <Flex
                marginTop="3em"
                border="1px solid #a53333"
                padding=".5em .8em"
                borderRadius="10px"
              >
                <a>
                  <ArrowBackIcon marginRight="1em" />
                  Terug naar overzicht
                </a>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      cocktail: data.drinks[0],
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l"
  );
  const data = await response.json();
  const cocktails = data.drinks;
  return {
    paths: cocktails.map((cocktail) => ({
      params: { name: slugit(cocktail.strDrink) },
    })),
    fallback: "blocking",
  };
}
