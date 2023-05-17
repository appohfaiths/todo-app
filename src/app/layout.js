import React from 'react';
import './globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

export const metadata = {
  title: 'Simple Todo List App',
  description: 'A simple todo list app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
