import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import Navigation from "../navigation.js";
import Footer from "../footer.js";
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Navigation />
        <Box id="fullpage">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
