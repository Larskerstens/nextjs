import Link from "next/link";
import { Flex } from "@chakra-ui/react";

function navigation() {
  return (
    <>
      <nav id="nav">
        <ul>
          <Flex
            justifyContent="space-evenly"
            alignItems="center"
            bgColor="#a53333"
            fontSize="20px"
            height="75px"
          >
            <li>
              <Link href="/">
                <a title="Ga naar de home pagina">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/pokedex">
                <a title="Ga naar de Pokédex pagina">Pokédex</a>
              </Link>
            </li>
            <li>
              <Link href="/pokedex-shiny">
                <a title="Ga naar de Pokédex-shiny pagina">Shiny Pokédex</a>
              </Link>
            </li>
            <li>
              <Link href="/cocktail-react">
                <a title="Ga naar de Cocktail-react pagina">Cocktail-react</a>
              </Link>
            </li>
            <li>
              <Link href="/cocktail">
                <a title="Ga naar de Cocktail pagina">Cocktail</a>
              </Link>
            </li>
            <li>
              <Link href="/cocktail-nextjs-static">
                <a title="Ga naar de Cocktail-nextjs-static pagina">
                  Cocktail-static
                </a>
              </Link>
            </li>
            <li>
              <Link href="/movie">
                <a title="Ga naar de Movie pagina">Movie</a>
              </Link>
            </li>
            <li>
              <Link href="/todo">
                <a title="Ga naar de Todo pagina">Todo</a>
              </Link>
            </li>
            <li>
              <Link href="/counter">
                <a title="Ga naar de Counter pagina">Counter</a>
              </Link>
            </li>
            <li>
              <Link href="/dog">
                <a title="Ga naar de Dog pagina">Dog</a>
              </Link>
            </li>
            <li>
              <Link href="/aoe">
                <a title="Ga naar de Age of Empires II pagina">
                  Age of Empires II
                </a>
              </Link>
            </li>
            <li>
              <Link href="/train">
                <a title="Ga naar de Train pagina">Train</a>
              </Link>
            </li>
          </Flex>
        </ul>
      </nav>
    </>
  );
}

export default navigation;
