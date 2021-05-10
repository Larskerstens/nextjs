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
        <Image src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
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
                _hover={{
                  bg: "#a53333",
                }}
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
  const [id] = context.params.slug;
  //console.log(context.params.slug);
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
  );
  const data = await response.json();
  //console.log(data);
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
  const paths = cocktails.map((cocktail) => ({
    params: {
      slug: [cocktail.idDrink.toString(), slugit(cocktail.strDrink)],
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
