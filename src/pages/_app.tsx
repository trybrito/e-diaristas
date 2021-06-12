import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core';
import theme from 'ui/themes/theme';

import Header from 'ui/components/surfaces/Header/Header';
import Footer from 'ui/components/surfaces/Footer/Footer';

import { AppContainer } from 'ui/styles/pages/_app.style';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="fonts/tw-icons/css/treinaweb-icons.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default MyApp
