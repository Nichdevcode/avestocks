// import NextAuthSesssionProvider from '@/providers/SesssionProvider';
import QueryProvider from '@/providers/QueryProvider';
import { TranslationProvider } from '@/providers/TranslationProvider';
import { AuthContextProvider } from '@/providers/AuthProvider';
import './globals.css'
import { useEffect } from 'react';
// import { Inter } from 'next/font/google'
// This component also contains tidio installation and aos initiallisation


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avestock Trades',
  description: 'Trade with us for full financial security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className=''>
      {/* <NextAuthSesssionProvider> */}
        <AuthContextProvider>
        <QueryProvider>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </QueryProvider>
        </AuthContextProvider>
      {/* </NextAuthSesssionProvider> */}
      <script src="//code.tidio.co/elzxmzhho7bvam4tizzwespxis9lot9u.js" async></script>
      </body>
    </html>
  )
}
