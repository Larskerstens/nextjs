import Head from "next/head";

export default function index({ person }) {
  return (
    <>
      <Head>
        <title>Cocktail pagina</title>
      </Head>
      <h1>Peroonlijke info</h1>
      <p>Naam: {person.name}</p>
      <p>Leeftijd: {person.age}</p>
      <p>Postcode: {person.postcode}</p>
      <p>Gemeente: {person.gemeente}</p>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      person: {
        name: "Lars",
        age: 25,
        postcode: 2650,
        gemeente: "Edegem",
      },
    },
  };
}
