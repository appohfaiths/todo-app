import './globals.css';
import { Pontano_Sans } from 'next/font/google';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

const pontanoSans = Pontano_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Simple Todo List App',
  description: 'A simple todo list app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pontanoSans.className} flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
