'use client'
import styles from './home.module.css'

import { useState } from 'react'

import Head from 'next/head'

import HomeHeader from './components/homeHeader/homeHeader'
import HomeProject from './components/homeProject/homeProject'
import HomeAbout from './components/homeAbout/homeAbout'
import HomeContact from './components/homeContact/homeContact'

import Loading from './components/loading/loading'

function HomePage() {

  const [isLoading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false);
  }, 1200)
  
  return (
    <div>
        {isLoading && <Loading />}
        <HomeHeader />
        <HomeAbout />
        <HomeProject />
        <HomeContact />
    </div>
  )
}

export default HomePage