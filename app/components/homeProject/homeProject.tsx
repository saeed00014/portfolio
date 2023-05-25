import styles from './homeProject.module.css'

import { projects } from '../../projectsData'

import Image from 'next/image'
import laptopP1 from '../../images/laptopP1.png'
import phoneP1 from '../../images/phoneP1.png'

import Link from 'next/link'

const HomeProject = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        My Projects
        <span className={styles.line}></span>  
      </h1>
      <p className={styles.titleDis}>Take a look at some of my projects</p>
      <div className={styles.container}> 
        {projects.map((project) => {
          const url = project.url
          const style = {
            backgroundImage: `url(${url})`
          }
          return (
            <div key={project.id} className={styles.content}>
              <div className={styles.pic}>
                <Image className={styles.laptop}
                  src={laptopP1}
                  alt='111'
                />
                <Image className={styles.phone}
                  src={phoneP1}
                  alt='111'
                />
              </div>
              <div className={styles.details}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.dis}>{project.dis}</p>
                <div className={styles.skills}>
                  {project.skills.map((skill) => {
                    return (
                      <div key={skill}>
                        <span className={styles.skill}>{skill}</span>
                      </div>
                    )
                  })}
                </div>
                <div className={styles.projectLink}>
                  <a className={styles.visitSite} href="https://comfy-fenglisu-3f8324.netlify.app">
                    VisitSite
                    <span></span> 
                  </a>
                  <a className={styles.visitSite} href="https://comfy-fenglisu-3f8324.netlify.app">
                    GitHub
                    <span></span>   
                  </a>
                  <Link href='/projects' className={styles.visitSite}>
                    Perview
                    <span></span>   
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HomeProject