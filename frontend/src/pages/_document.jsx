import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <title>Atelier CDLN</title>
        <meta name="description" content="description" />

        <meta property="og:title" content="Atelier CDLN" />
        <meta property="og:url" content="https://www.synchronized.tv" />
        <meta
          property="og:site_name"
          content="Synchronized | In-Video Intelligence"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="description" />
        <meta property="og:image:secure_url" content="url" />
        <meta property="og:image" content="url" />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="384" />
        <meta property="og:image:height" content="216" />

        <meta name="twitter:card" content="Atelier CDLN" />
        <meta name="twitter:site" content="@atelierCdln" />
        <meta name="twitter:title" content="Atelier CDLN" />
        <meta name="twitter:description" content="description" />
        <meta name="twitter:image" content="url" />

        <meta
          name="keywords"
          content="Atelier Cdln, Theo Chapdelaine, graphic designer, motion designer, video, videos, film, films, editing, projects"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="any"
          href="/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/images/favicon.ico"
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
