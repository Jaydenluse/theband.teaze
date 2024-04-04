// pages/_app.js
// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
        {/* Add the favicon links */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
      </Head>
      <Head>
        <title>{pageProps.title || 'Teaze'}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;