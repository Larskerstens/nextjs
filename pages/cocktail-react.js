import { useState, useEffect } from "react";
import Head from "next/head";

export default function cocktailReact() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c")
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
      <h1>Cocktails-React</h1>
      {loading && <p>loading</p>}
      {error && <p>error</p>}
      {cocktails.length !== 0 && (
        <ul>
          {cocktails.map((cocktail) => (
            <>
              <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </>
          ))}
        </ul>
      )}
    </>
  );
}
