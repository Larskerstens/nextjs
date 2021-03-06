import Link from "next/link";
import Head from "next/head";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { slugit } from "../../helpers";

export default function movieDetail({ movie }) {
  return (
    <>
      <Head>
        <title>{movie.title} pagina</title>
      </Head>
      <Flex>
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <Flex flexDirection="column" marginLeft="2em">
          <Heading padding="1em 0">{movie.title}</Heading>
          <p>Genre: {movie.genres.map((n) => n.name).join(", ")}</p>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}/10</p>
          <p>Duur: {movie.runtime} minuten</p>
          <p>Uitgekomen: {movie.release_date}</p>
          <p>Filmbudget: {movie.budget}</p>
          <p></p>
          <Flex alignItems="center">
            <Link href={"../movie"}>
              <Flex
                marginTop="3em"
                border="1px solid #a53333"
                padding=".5em .8em"
                borderRadius="10px"
              >
                <a>
                  <ArrowBackIcon marginRight="1em" />
                  Terug naar overzicht
                </a>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const [id] = context.params.slug;
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US"
  );
  const data = await response.json();
  return {
    props: {
      movie: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=10fa74251cfff94026cb589d95b3db91&language=en-US&query=saw&page=1&include_adult=false"
  );
  const data = await response.json();
  const movies = data.results;
  const paths = movies.map((movie) => ({
    params: {
      slug: [movie.id.toString(), slugit(movie.title)],
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
