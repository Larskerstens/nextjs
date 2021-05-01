import Link from "next/link";
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
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
        </ul>
      </nav>
      <Component {...pageProps} />
      <footer>Copyright © Kerstens Lars</footer>
    </>
  );
}

export default MyApp;
