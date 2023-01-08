import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuContainer from "./MenuContainer.js";
import myImage from '../src/img/me.jpg';

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
        <div className='nav' style={
          { display: 'grid' }
        }>
          <MenuContainer />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About Me
        </h1>
        <div className='about-layout'>
          <img  src={myImage.src} alt="A picture of me" className='about-picture'/>
          <p className='about-text'>Hi! My name is Dakota. I am a senior at the University of Vermont studying
          Mathematics, with a minor in Computer Science. Despite being a Math major, I know that Software Engineering is 
          the career path that is right for me. I fell in love with coding after taking the beginner coding class required
          for my major, and haven't looked back since. Outside of coding, I enjoy spending time with my animals (3 cats and 2 dogs),
          working out, and going on adventures with my friends and family. I look forward to finding the company that is a perfect match!</p>
        </div>
        

      </main>

      <footer className={styles.footer}>
        Dakota Smith 2022
      </footer>

    </div>
  )
}
