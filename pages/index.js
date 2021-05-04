import Head from "next/head";
import { Heading, Flex } from "@chakra-ui/react";

export default function index({ person }) {
  return (
    <>
      <Head>
        <title>Cocktail pagina</title>
      </Head>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading padding=".5em">Oefening op nextjs</Heading>
        <Heading fontSize="1.5em">Peroonlijke info</Heading>
        <p>Naam: {person.name}</p>
        <p>Leeftijd: {person.age}</p>
        <p>Postcode: {person.postcode}</p>
        <p>Gemeente: {person.gemeente}</p>
      </Flex>
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
