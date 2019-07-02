import React from "react"
import styles from "../components/bulma.module.css"
import styles1 from "../components/container.module.css"

export default () => (
<footer className={styles.footer+" "+styles1.futa} id="about">
<div className={styles.level}>
<div className={styles.levelRight}>
<div className={styles.levelItem}>
<section className={styles.section}>
<h1 className={styles.title} style={{fontSize:`18px`}}>
Metrix Research Consultants Limited
</h1><br/>
<h3 className={styles.subtitle} style={{fontSize:`13px`,width:`700px`}}>
MRC is registered is registered by the Ministry of Justice, of the Republic of South Sudan in 2017
as a Company under the South Sudan Companies Act (2003). It also has it operational license
issued by the Government of South Sudan, Ministry of Commerce, Trade and Industry. Moreover,
it is also a member of the South Sudan Chamber of Commerce, Industry and Agriculture (SSCCIA).
MRC is tax complainant in accordance to the Tax Laws of South Sudan<br/>
<p style={{marginTop:`10px`}}> MRC copyright © 2019</p>
</h3>
</section>
</div>
</div>
<div className={styles.levelLeft}>
<div className={styles.levelItem}>
<section className={styles.section}>
<h1 className={styles.title} style={{fontSize:`18px`}}>
Location
</h1><br/>
<h3 className={styles.subtitle} style={{fontSize:`13px`,width:`700px`}}>
MRC's offices is located in Gudele block-8 juba city<br/>
South Sudan; (Gudele block -8)<br/>
Manager: +211:929-296-945<br/>
www.metrixrc.com<br/>
demai.baka@gmail.com<br/>
Email: metrixrc.com 
</h3>
</section>
</div>
</div>
</div>
</footer>
)
