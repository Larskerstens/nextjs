import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading } from "@chakra-ui/react";
import slugify from "slugify";
import db from "../db";

export default function placesdb({ plaatsen }) {
  return (
    <>
      <Head>
        <title>Places pagina</title>
      </Head>
      <Heading textAlign="center" pt="1em">
        Plaatsen waar ik ben geweest
      </Heading>
      <Heading textAlign="center" p="1em">
        Dit werkt alleen locaal!!
      </Heading>

      <ul>
        {plaatsen.map((plaats) => (
          <>
            <li key={plaats.img_id}>
              {plaats.img_location}{" "}
              <Link
                href={
                  "/place/" +
                  plaats.img_id +
                  "/" +
                  slugify(plaats.img_location, {
                    lower: true,
                    strict: true,
                  })
                }
              >
                <a>Detail van de plaats</a>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const results = await db
    .select("img_id", "img_location", "img_width")
    .table("images");
  const plaatsen = JSON.parse(JSON.stringify(results));
  console.log(plaatsen);
  return {
    props: { plaatsen },
  };
}
