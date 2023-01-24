// import { Space_Grotesk } from '@next/font/google';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
// import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

// const space_grotesk = Space_Grotesk({
//   subsets: ['latin'],
//   variable: '--font-space_grotesk',
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${space_grotesk.variable} font-sans`}>
    <Component {...pageProps} />
    // </main>
  );
}

export default MyApp;
