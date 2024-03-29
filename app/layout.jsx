import React from 'react';
import './globals.css'

export const metadata = {
  title: 'Biblioteca Penco',
  description: 'Generated by create next app',
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
