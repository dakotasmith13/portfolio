import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuContainer from "../src/MenuContainer.js";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta name="description" content="All about Dakota Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="site-header">
        <h1 className='name'>
          <a href='/'>
            DAKOTA SMITH
          </a>
        </h1>
        <MenuContainer class="nav" />
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Me
        </h1>
      </main>

      <footer className={styles.footer}>
        Dakota Smith 2022
      </footer>
    </div>
  )
}
