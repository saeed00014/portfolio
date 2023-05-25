import styles from './homeContact.module.css'

const HomeContact = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formOntop}>
          <h1>Contact me</h1>
          <p>Thanks for taking the time</p>
          <p>to reach out. How can I help you today?</p>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.formTop}>
            <div className={styles.top}>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' />
            </div>
            <div className={styles.top}>
              <label htmlFor="amail">Email</label>
              <input type="text" id='email' />
            </div>
          </div>
          <div className={styles.formBottom}>
            <label htmlFor="message">Message</label>
            <textarea id='message' />
          </div>
          <div className={styles.submitLink}>
            <span></span>
            <span></span>
            <input type="submit" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default HomeContact