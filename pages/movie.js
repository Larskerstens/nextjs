import Head from "next/head";
import Link from "next/link";
import { Grid, Flex, Heading } from "@chakra-ui/react";
//import axios from "axios";

export default function movie({ movies }) {
  return (
    <>
      <Head>
        <title>Movies pagina</title>
      </Head>
      <Heading textAlign="center" p="1em">
        Movies
      </Heading>
      {
        <ul>
          <Grid templateColumns="repeat(10, 1fr)" gap={6}>
            {movies.map((movie) => (
              <>
                <Link href={"/movie/" + movie.title}>
                  <a className="cocktailName">
                    <Flex flexDirection="column" alignItems="center">
                      <li key={movie.id}>{movie.title}</li>

                      <img
                        id="movieImg"
                        src={
                          "https://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                        alt={movie.title}
                      />
                    </Flex>
                  </a>
                </Link>
              </>
            ))}
          </Grid>
        </ul>
      }
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=saw&page=1&include_adult=false"
  );
  const data = await response.json();
  const movies = data.results;
  return {
    props: {
      movies,
    },
  };
}
