import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Box id='fullpage'>
            <Component {...pageProps} />
          </Box>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
