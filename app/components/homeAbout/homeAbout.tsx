import styles from './homeAbout.module.css'

import Link from 'next/link'

import { skills } from '../../skillData'

const HomeAbout = () => {
  return (
    <section id='about' className={styles.section}>
      <h1 className={styles.title}>
        About me
      </h1>
      <p className={styles.titleDis}>Know more About me and my Skills</p>
      <div className={styles.container}>
        <div className={styles.aboutLeft}>
          <h1>Get to know me</h1>
          <p>Im 21 Years old and started web development 5 mounth ago and im learning 
            more about it everyday.</p>
          <p>Im looking for job opportunitys that 
            i can contribute and learn more.
            i have some projects to show you more my skills and expriences.
          </p>
          <Link href='/projects'>
            <span></span>
            <span></span>
            My Projects
          </Link>
        </div>
        <div className={styles.aboutRight}>
          <h1>My Skills</h1>
          <div className={styles.skills}>
            {skills.map((skill) => {
              return (
                <div key={skill}>
                  <span className={styles.skill}>{skill}</span>
                </div>
              )
            })}
          </div>
          <h3 className={styles.learningMore}>and Learning alot more.....</h3>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout