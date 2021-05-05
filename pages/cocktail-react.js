import { useState, useEffect } from "react";
import Head from "next/head";
import { Grid, Flex, Heading } from "@chakra-ui/react";

export default function cocktailReact() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Head>
        <title>Cocktail-react pagina</title>
      </Head>
      <Heading textAlign="center" p="1em">
        Cocktail-react
      </Heading>
      {loading && <p>loading</p>}
      {error && <p>error</p>}
      {cocktails.length !== 0 && (
        <ul>
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            {cocktails.map((cocktail) => (
              <>
                <Flex flexDirection="column" alignItems="center">
                  <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
                  <img
                    id="cocktailImg"
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                  />
                </Flex>
              </>
            ))}
          </Grid>
        </ul>
      )}
    </>
  );
}
