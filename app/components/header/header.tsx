'use client'
import styles from './header.module.css'

import Image from 'next/image'
import logo from '../../images/logoS.png'

import Link from 'next/link'

import { Dancing_Script } from 'next/font/google'
import { useState } from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

export const LogoText = Dancing_Script ({
  weight:'400',
  subsets: ['latin']
})



const Header = () => {
  
  const [hamb, setHamb] = useState(false)
  
  const handleHamb = () => {
    setHamb(!hamb)
  }

  const handleDelhamb = () => {
    setHamb(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link onClick={handleDelhamb} href='/' className={LogoText.className}>
            <h1>Saeed</h1> 
          </Link>
        </div>
        <ul className={hamb ? styles.hamb : styles.navlink}>
          <li onClick={handleDelhamb}><Link href="/projects">{ hamb ? 'Projects' : '01.Projects'}</Link></li>
          <li onClick={handleDelhamb}><Link href="/resume">{ hamb ? 'Resume' : '02.Resume'}</Link></li>
          <li onClick={handleDelhamb}><Link href="/contact">{ hamb ? 'Contact' : '03.Contact'}</Link></li>
        </ul>
        <div onClick={handleHamb} className={hamb ? styles.delHamb : styles.hambargar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {hamb && 
          <ul className={styles.socialLink}>
            <li>
              <a href="saeedm00014@gmail.com">
                <AiOutlineMail />
              </a>
            </li>
            <li>
              <a href='https://github.com/saeed00014'>
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href='https://github.com/saeed00014'>
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href='https://github.com/saeed00014'>
                <AiFillInstagram />
              </a>
            </li>
          </ul>}
      </div>
    </header>
  )
}

export default Header