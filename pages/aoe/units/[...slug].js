import Link from "next/link";
import Head from "next/head";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { slugit } from "../../../helpers";

export default function unitsDetail({ units }) {
  return (
    <>
      <Head>
        <title>{units.name} pagina</title>
      </Head>
      <Heading as='h1'>{units.name}</Heading>
      <Box textAlign='center'>{units.description}</Box>
      <Flex alignItems='center' justifyContent='center'>
        <Link href={"../../aoe"}>
          <Flex
            marginTop='3em'
            border='1px solid #a53333'
            padding='.5em .8em'
            borderRadius='10px'
            _hover={{
              bg: "#a53333",
            }}
          >
            <a>
              <ArrowBackIcon marginRight='1em' />
              Terug naar overzicht
            </a>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  //console.log(context.params.slug);
  const response = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + id,
  );
  const units = await response.json();
  //console.log(data);
  return {
    props: {
      units,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://age-of-empires-2-api.herokuapp.com/api/v1/units",
  );
  const data = await response.json();
  const units = data.units;
  const paths = units.map((unit) => ({
    params: {
      slug: [unit.id.toString(), slugit(unit.name)],
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
