import React from "react"
import Helmet from 'react-helmet';
import {Link} from "gatsby"
import styles from "../components/bulma.module.css"
import styles1 from "../components/container.module.css"
import Footer from "./footer.js"

export default ({children}) =>[
<Helmet key="app-head">
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    {/* Favicons from realfavicongenerator.net */}
    <link rel="apple-touch-icon" sizes="180x180" href="/index.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/index.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/index.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#39bbdf" />
    <meta name="theme-color" content="#fff" />
    <title>MRC</title>
</Helmet>,
<div className="main">
<div className={styles1.stickyNav}>
<nav className={styles.navbar+" "+styles.isTransparent}>
  <div className={styles.navbarBrand}>
  <span className={styles.image}>
  <img src="index.png" style={{width:`56px`}}/>
  </span>
    <div className={styles.navbarBurger+" "+styles.burger} data-target="navbarTransparent">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navbarTransparent" className={styles.navbarMenu}>
    <div className={styles.navbarEnd}>
      <a className={styles.navbarItem+" "+styles1.navbarItem} href="#home">
      Home
      </a>
      <a className={styles.navbarItem+" "+styles1.navbarText} href="#services">
      Services
      </a>
      <a className={styles.navbarItem+" "+styles1.navbarText} href="#work">
      Work
      </a>
      <a className={styles.navbarItem+" "+styles1.navbarText} href="#about">
      About
      </a>
      <a className={styles.navbarItem+" "+styles1.navbarText} style={{color:`#3273dc`}} href="mailto:elemanhillary@gmail.com">
        <span className={styles.button+" "+styles1.button}>Contact Us</span>
      </a>
    </div>
  </div>
</nav>
</div>
{children}
<Footer/>
</div> 
]
