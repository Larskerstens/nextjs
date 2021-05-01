import Head from "next/head";
import Link from "next/link";
//import axios from "axios";

export default function cocktail({ cocktails }) {
  return (
    <>
      <Head>
        <title>Cocktail pagina</title>
      </Head>
      <h1>Cocktail</h1>
      {
        <ul>
          {cocktails.map((cocktail) => (
            <>
              <Link href={"/cocktail/" + cocktail.strDrink}>
                <li key={cocktail.idDrink}>
                  <a className="cocktailName">{cocktail.strDrink} </a>
                </li>
              </Link>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            </>
          ))}
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
