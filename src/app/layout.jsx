import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vitor Dallanol',
  description: 'Personal website of Vitor Dallanol',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VDWNT5LDGG"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VDWNT5LDGG');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
