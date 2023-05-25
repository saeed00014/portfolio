import styles from './loading.module.css'

import { Dancing_Script } from 'next/font/google'

export const LogoText = Dancing_Script ({
  weight:'400',
  subsets: ['latin']
})

const Loading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={LogoText.className}>
          Saeed
          <span></span>
        </p>
        <div className={styles.line}></div>
      </div>
    </section>
  )
}

export default Loading