"use client"

import styles from './footer.module.css'

import { LogoText } from '../header/header'

import { AiOutlineMail } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
            <h1 className={LogoText.className}>Saeed</h1>
        <div className={styles.footerTop}>
          <div className={styles.text}>
            <h5 >&lt;alive&gt;</h5>
            <div className={styles.textIn}>
              <h3 className={LogoText.className}>Eat Sleep Code  Repeat</h3>
            </div>
            <h5 >&lt;/alive&gt;</h5>
          </div>
          <div className={styles.footerLink}>
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
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>2023-Made By Saeed saeedm00014@gmail.com</div>
      </div>
    </section>
  )
}

export default Footer