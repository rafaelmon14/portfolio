import React from 'react'
import Layout from '../components/Layout'
import { withPrefix } from 'gatsby'
import * as styles from '../styles/cv.module.css'
import { jsPDF } from "jspdf";

export default function About() {
  return (
    <Layout>
      <title>Rafael Montenegro - Portfolio Web</title>
      <div className={styles.contenedor}>
        
      <a
          href={withPrefix("/Rafael-Montenegro-CV2.pdf")}
          download="Rafael-Montenegro-CV2.pdf"
          
        >
          Descargar CV
        </a>
        <iframe
        src={withPrefix("/Rafael-Montenegro-CV2.pdf")}
          
        ></iframe>
        
        
      </div>
    </Layout>
  )
}
