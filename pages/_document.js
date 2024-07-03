import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content="Get ready for BrainBash, where your wits are put to the test! Answer challenging questions, and prove you're the smartest of them all."
        />
      </Head>
      <body className='m-0 p-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
