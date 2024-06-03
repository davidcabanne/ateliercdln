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
        <meta
          name="description"
          content="Le design au service des porteurs de projets et des entrepreneurs souhaitant développer des images de marque uniques et fortes pour que leurs idées novatrices et porteuses de sens soient adoptées par le plus grand nombre."
        />

        <meta property="og:title" content="Atelier CDLN" />
        <meta property="og:url" content="https://www.ateliercdln.com" />
        <meta property="og:site_name" content="Atelier CDLN" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Le design au service des porteurs de projets et des entrepreneurs souhaitant développer des images de marque uniques et fortes pour que leurs idées novatrices et porteuses de sens soient adoptées par le plus grand nombre."
        />
        <meta property="og:image" content="/atelierCDLN_card.jpg" />
        <meta property="og:image:secure_url" content="/atelierCDLN_card.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1557" />
        <meta property="og:image:height" content="1001" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@atelierCdln" />
        <meta name="twitter:title" content="Atelier CDLN" />
        <meta
          name="twitter:description"
          content="Le design au service des porteurs de projets et des entrepreneurs souhaitant développer des images de marque uniques et fortes pour que leurs idées novatrices et porteuses de sens soient adoptées par le plus grand nombre."
        />
        <meta name="twitter:image" content="/atelierCDLN_card.jpg" />

        <meta
          name="keywords"
          content="Atelier Cdln, Theo Chapdelaine,  art direction, graphic design, motion design, web design"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/favicon.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
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
