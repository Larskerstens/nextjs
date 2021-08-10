import React from "react";
/* import db from "../../DB"; */
import Link from "next/link";
import { Heading } from "@chakra-ui/react";

function zoeken({ plaatsen, movies }) {
  return (
    <>
      <ul>
        {movies.map((movie, index) => (
          <>
            <li key={index}>
              {movie.title}{" "}
              <Link
                href={
                  "/movie/" + movie.id
                  /* "/" +
                  slugit(plaats.img_location) */
                }
              >
                <a>Detail van de movie</a>
              </Link>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default zoeken;

export async function getStaticProps(context) {
  const { zoekstring } = context.params;
  /* const plaatsen = await db
    .select()
    .table("images")
    .where("img_location", "like", `%${zoekstring}%`); */
  const resp = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=" +
      context.params.zoekstring +
      "&page=1&include_adult=false",
  );
  const data = await resp.json();
  const movies = data.results;
  return {
    props: {
      /* plaatsen: JSON.parse(JSON.stringify(plaatsen)), */
      movies,
    },
    revalidate: 3600,
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { zoekstring: "ko" },
      },
      {
        params: { zoekstring: "tit" },
      },
    ],
    fallback: "blocking",
  };
}

/* <Heading>Zoekresultaten van uw zoek in plaatsen</Heading>
      <ul>
        {plaatsen.map((plaats) => (
          <>
            <li key={plaats.img_id}>
              {plaats.img_location}{" "}
              <Link
                href={
                  "/plaatsen/" + plaats.img_id
                  /* "/" +
                  slugit(plaats.img_location) */
/*
                }
                >
                  <a>Detail van de plaats</a>
                </Link>
              </li>
            </>
          ))}
              </ul>  */
