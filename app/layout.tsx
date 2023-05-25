'use client'

import './globals.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import { useState } from 'react'
import Loading from './components/loading/loading';

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {

  const [isLoading, setIsLoading] = useState(false)

  setTimeout(() => {
    setIsLoading(false)
  }, 1600)

  return (
    <html lang="en">
      <head>
        <title>Saeed Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {isLoading && <Loading />}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}