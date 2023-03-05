import { AppProps } from 'next/app';
// https://github.com/vercel/next.js/blob/4d4f309301/examples/with-tailwindcss/pages/_app.js
// https://nextjs.org/learn/excel/typescript/nextjs-types
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

