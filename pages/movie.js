import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading, Skeleton, Image } from "@chakra-ui/react";
import { slugit } from "../helpers";
import React from "react";

import { useState } from "react";

export default function movie({ movies }) {
  const [value, setValue] = useState("");

  return (
    <>
      <Head>
        <title>Movies pagina</title>
      </Head>

      <Heading as='h2'>Zoeken naar film</Heading>

      <input
        id='enter'
        type='text'
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <Link href={`/zoek/${value}`}>
        <a type='submit' id='button'>
          Zoek
        </a>
      </Link>

      <Heading as='h1'>Movies</Heading>

      <ul>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={[2, 2, 4, 6]}
        >
          {movies.map((movie) => (
            <>
              <Link href={"/movie/" + movie.id + "/" + slugit(movie.title)}>
                <a className='movieName'>
                  <Flex flexDirection='column' alignItems='center'>
                    <li key={movie.id}>
                      <p>{movie.title}</p>
                      <Skeleton isLoaded={movie.poster_path}>
                        <Image
                          className='movieImg'
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            movie.poster_path
                          }
                          alt={movie.title}
                        />
                      </Skeleton>
                    </li>
                  </Flex>
                </a>
              </Link>
            </>
          ))}
        </Grid>
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=saw&page=1&include_adult=false",
  );
  const data = await response.json();
  const movies = data.results;
  return {
    props: {
      movies,
    },
  };
}
