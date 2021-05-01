export default function cocktailDetail({ cocktail }) {
  return (
    <>
      <h1>{cocktail.strDrink}</h1>
      <p>{cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
  );
  const data = await response.json();
  return {
    props: {
      cocktail: data.drinks[0],
    },
  };
}
