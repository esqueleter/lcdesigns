import React from 'react';
import Document, { Head, Html, NextScript, Main } from 'next/document';
import icon from '../assets/icons/logoLCDesigns.svg';
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="shortcut icon" href="../assets/icons/logoLCDesigns.svg" /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
