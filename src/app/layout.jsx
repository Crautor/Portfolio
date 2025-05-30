import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vitor Dallanol',
  description: 'Personal website of Vitor Dallanol',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VDWNT5LDGG"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-VDWNT5LDGG');
      </script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
