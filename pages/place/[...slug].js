import Head from "next/head";
import {
  Heading,
  Flex,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import db from "../../db";

import slugify from "slugify";

export default function plaatsDetail({ place }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Head>
        <title>Places pagina</title>
      </Head>

      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading padding=".5em">{place.img_location}</Heading>
        <Button onClick={onToggle}>Klik hier voor mijn info</Button>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box p="40px" color="white" mt="4" rounded="md" shadow="md">
            <p>Locatie: {place.img_location}</p>
            <p>Id: {place.img_id}</p>
            <p>Bestandsnaam foto: {place.img_filename}</p>
            <p>
              Aantal pixels: {place.img_width} x {place.img_height}
            </p>
            <p>Korte uitleg: {place.img_title}</p>
          </Box>
        </ScaleFade>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  console.log(context.params.slug);

  const results = await db
    .select(
      "img_id",
      "img_location",
      "img_width",
      "img_height",
      "img_title",
      "img_filename"
    )
    .table("images")
    .where("img_id", id);
  const place = JSON.parse(JSON.stringify(results[0]));
  return {
    props: {
      place,
    },
  };
}

export async function getStaticPaths() {
  const results = await db
    .select(
      "img_id",
      "img_location",
      "img_width",
      "img_height",
      "img_title",
      "img_filename"
    )
    .table("images");
  const paths = results.map((result) => ({
    params: {
      slug: [
        result.img_id.toString(),
        slugify(result.img_location, {
          lower: true,
          strict: true,
        }),
      ],
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
