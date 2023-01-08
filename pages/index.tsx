import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuContainer from "./MenuContainer.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dakota Smith Portfolio</title>
        <meta name="description" content="Portfolio for all of my work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="site-header">
        <h1 className='name'>
          <a href='/'>
            DAKOTA SMITH
          </a>
        </h1>
        <div className='nav' style={
          { display: 'grid' }
        }>
          <MenuContainer />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my portfolio
        </h1>
      </main>

      <footer className={styles.footer}>
        Dakota Smith 2022
      </footer>
    </div>
  )
}
