import React from 'react'
import Layout from '../components/Layout'
import { withPrefix } from 'gatsby'
import * as styles from '../styles/cv.module.css'
import { jsPDF } from "jspdf";

export default function About() {
  return (
    <Layout>
      <div className={styles.contenedor}>
        
      <a
          href={withPrefix("/cv-RafaelMontenegro.pdf")}
          download="RafaelMontenegro_CV.pdf"
          
        >
          Descargar CV
        </a>
        <iframe
        src={withPrefix("/cv-RafaelMontenegro.pdf")}
          
        ></iframe>
        
        
      </div>
    </Layout>
  )
}
