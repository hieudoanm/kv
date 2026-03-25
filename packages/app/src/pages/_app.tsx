import '@sqlite/styles/globals.css';
import { HeadTemplate } from '../templates/HeadTemplate';
import type { AppProps } from 'next/app';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { FC } from 'react';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <HeadTemplate basic={{ title: 'SQLite Dashboard' }} />
      <div
        className={`${playfairDisplay.className} ${geistSans.className} ${geistMono.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
