import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuContainer from "../src/MenuContainer.js";

export default function Resume() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Resume</title>
                <meta name="description" content="Dakota Smith Resume" />
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
                    Check out my resume!
                </h1>
            </main>

            <footer className={styles.footer}>
                Dakota Smith 2022
            </footer>
        </div>
    )
}