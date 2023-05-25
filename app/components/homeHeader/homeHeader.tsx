import styles from './homeHeader.module.css'

import Link from 'next/link'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const HomeHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div className={styles.h1C}>
              <h1 className={styles.title}>
                <h1>Hi, Im Saeed .</h1> <h1>WebDeveloper</h1> 
                <span></span>
                <span></span>
              </h1>
            </div>
            <div className={styles.pC}>
              <p>Im a Web Developer mainly Focused on
                Frontend (JavaScript)</p>
            </div>
            <div className={styles.pC}>
              <p>Take your Time to know Me Better</p>
            </div>
          </div>
          <Link href='/contact' className={styles.contactLink}>
            Contact me
            <span></span>  
            <span></span>  
          </Link>
          <ul className={styles.socialLink}>
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
        <Link href='#about' className={styles.spin}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
    </section>
  )
}

export default HomeHeader