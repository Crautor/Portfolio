import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import Script from 'next/script';

import { pageMetadata } from '@/i18n/metadata';

import './globals.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz', 'wdth'],
  variable: '--font-display',
  display: 'swap',
});

const text = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});

const { title, description } = pageMetadata('pt');

export const metadata = { title, description };

export const viewport = {
  themeColor: '#0b1210',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR' className={`${display.variable} ${text.variable}`}>
      <head>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-VDWNT5LDGG' strategy='afterInteractive' />
        <Script id='gtag-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VDWNT5LDGG');
          `}
        </Script>
      </head>
      <body className='font-sans'>{children}</body>
    </html>
  );
}
