'use client'

import './globals.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'

import { useState } from 'react'
import Loading from './components/loading/loading';

import Head from 'next/head'

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
        <meta http-equiv="content-type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
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