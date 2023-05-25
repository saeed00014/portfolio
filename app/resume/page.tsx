'use client'

import styles from './resume.module.css' 

import { useState } from 'react'
import Loading from '../components/loading/loading'

import Image from 'next/image'

import engres from '../images/engres.png'
import perres from '../images/perres.png'

const ResumePage = () => {

  const [isEnglish, setIsEnglish] = useState(true)
    
  const [isLoading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1600)

  return (
    <section className={styles.section}>
      {isLoading && <Loading />}
      <div className={styles.container}>
        <h1 className={styles.title}>Resume.</h1>
        <div className={styles.select}>
          <select name="Languge version" id="" onChange={() => setIsEnglish(!isEnglish)}>
            <option value="English">English</option>
            <option value="Persian">Persian</option>
          </select>
          <p>Choose the languge version and
            {isEnglish ? <p><a href="https://cvbuilder.me/Builder/Pdf/en/template34/60bfaf67-8eda-43bc-b668-185e77348195/MyResume-559[www.cvbuilder.me]706.pdf">download</a> English Resume</p> 
             : <p><a href="https://cvbuilder.me/Builder/Pdf/fa/template34/0e72f72f-53d1-425e-a4b6-ae1e5d495aa0/MyResume-15[www.cvbuilder.me]235.pdf">download </a>Persian Resume</p> }
          </p>
        </div>
        {isEnglish && 
          <div className={styles.resumePic}>
            <Image 
              src={engres}
              alt='resumeEng'
            />
          </div>
        }
        {!isEnglish && 
          <div className={styles.resumePic}>
            <Image 
              src={perres}
              alt='resumePer'
            />
          </div>
        }
      </div>
    </section>
  )
}

export default ResumePage