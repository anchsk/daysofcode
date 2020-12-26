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
        <h2>
          <span className={styles.day}>02</span>{' '}
          <Link href='/day-02-fylo-landing-page-dark'>
            <a>Fylo Landing Page</a>
          </Link>
        </h2>
        <h2>
          <span className={styles.day}>03</span>{' '}
          <Link href='/day-03-fylo'>
            <a>Fylo Landing Page (with styled-components)</a>
          </Link>
        </h2>
      </main>

      <footer className={styles.footer}></footer>
    </>
  )
}
