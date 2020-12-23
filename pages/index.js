import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Days of code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Day One — Chat App</h2>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
