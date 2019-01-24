import React from "react"
import styles from "../components/bulma.module.css"
import styles1 from "../components/container.module.css"
import Layout from "../components/layout.js"
import {Link} from "gatsby"


export default () => (
<Layout>
<div className={styles.container} id="home">
<section className={styles.section}>
<div className={styles.level}>
<div className={styles.levelRight}>
<div className={styles.levelItem}>
<section className={styles.section}>
<h1 className={styles.title+" "+styles1.tito}>
Top Qaulity Consultants,
Metrix Research Consultants
</h1><br/>
<h3 className={styles.subtitle+" "+styles1.sub}>
MRC aspire to become a viable consultancy firm with demonstrated solutions that builds synergy
with national and international organizations engaged in furthering the political, social, economic
and rural developmental interventions in South Sudan.
</h3>
<p className={styles1.buttonContact}>
  <a href="mailto:elemanhillary@gmail.com">
<span className={styles.button+" "+styles1.button}>Contact us now</span>
  </a>
</p>
</section>
</div>
</div>
<div className={styles.levelLeft}>
<div className={styles.levelItem}>
<img className={styles1.ImageDesc} src="/images/preview.png"/>
</div>
</div>
</div>
</section>
</div>




<div className={styles.container} id="services">
<section className={styles.section}>
<h1 className={styles.title+" "+styles.hasTextCentered+" "+styles1.subServ}>Exclusive services for our</h1>
<h3 className={styles.title+" "+styles.hasTextCentered+" "+styles1.subbu}>groundbreaking projects</h3>
<section className={styles.section}>
<div className={styles.container+" "+styles.isFullhd}>
<div className={styles.columns}>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/baseline.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>baseline surveys and community needs assessments</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/formulation.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>project formulations
and evaluations</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/values.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>value chains analysis and development</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="services" className={styles.section}>
<div className={styles.container+" "+styles.isFullhd}>
<div className={styles.columns}>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/planning.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>strategic planning and policy
frameworks</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/program.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>program management</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/trade.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>trade facilitation</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>You better visit my github to view my previous work. Hopefully</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>
</div>



<div className={styles.container} id="work">
<section className={styles.section}>
<h2 className={styles.hasTextCentered+" "+styles.title+" "+styles1.subServ}>
MRC's successful projects that we worked till now
</h2>
<section className={styles.section}>
<div className={styles.container+" "+styles.isFullhd}>
<div className={styles.columns}>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/baseline.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>
End of Project Evaluation Supporting the Ministry of Animal Resources and Fisheries and
Marial Lou Livestock Training Centre (NICHE-SSD-097)
</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
The project aimed at upgrading MLLTC as well as capacity building of staff at the Ministry of
Animal Resources and Fisheries (MARF) capacity in Technical Vocational Education and Training
(TVET) policy formulation and implementation in South Sudan
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/formulation.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>Needs Assessment for
Increased Productivity and Access to Markets</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
The Alliance for Green Revolution in Africa
(AGRA) has been operational in South
Sudan over the last few years since
formation in 2006
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/values.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>
Capacity Assessment of the Board of Governors (BoGs) of National Teachers Training
Institutes in South Sudan
</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
This was a programme funded Strømme Foundation
(SF) in partnership with the Norwegian Church Aid (NCA), and the South Sudan national Ministry
of Education and General Instruction (MoGEI)
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={styles.section}>
<div className={styles.container+" "+styles.isFullhd}>
<div className={styles.columns}>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/planning.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>
Mid-term Evaluation of Community Action Programme for Action Africa Help International
</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
The goal of CAPOR project is to create a peaceful post-conflict transition and reconstruction
process in Equatoria region of South Sudan.
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/trade.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>
Evaluation of a Food Security, Soil and Water Conservation Project in Aweil North, South
Sudan – Concern Worldwide, South Sudan Programme
</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
Concern Worldwide – South Sudan Programme contracted our experts to undertake a
comprehensive evaluation of a food security, soil and water conservation and capacity support
programme implemented in several counties in Aweil West and Aweil North Counties
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
<div className={styles.column}>
<div className={styles.card+" "+styles1.box} style={{borderRadius:`3px`, border:`none`}}>
<div className={styles.cardImage}>
<figure className={styles.Image}>
<h4 className={styles.hasTextCentered}>
<img src="/images/program.png"></img>
</h4>
</figure>
<div className={styles.cardContent}>
<div className={styles.content}>
<h4 className={styles.hasTextCentered} style={{fontSize:`17px`}}>
Capacity Assessment of Education Implementing Partners in Eastern Equatoria state –
OPRD, Education Project
</h4>
<p style={{color: `#a1a5ae`,fontSize: `13px`}}>
The Organization for Peace, Relief and Development (OPRD) is an indigenous South Sudanese
CBOs with multi-lateral donors supporting various development initiatives in Easter Equatoria
</p>
<span className={styles.button}>view more</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>
</div>
</Layout>
)

