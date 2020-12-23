import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2>
          <span className={styles.day}>01</span>{' '}
          <Link href='/day-01-chat-app'>
            <a>Chat App</a>
          </Link>
        </h2>
      </main>

      <footer className={styles.footer}></footer>
    </>
  )
}
