import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/cv.module.css'
import { jsPDF } from "jspdf";

export default function About() {
  return (
    <Layout>
      <div className={styles.contenedor}>
        
      <a
          href="/cv-RafaelMontenegro.pdf"
          download="RafaelMontenegro_CV.pdf"
          
        >
          Descargar CV
        </a>
        <iframe
          src="/cv-RafaelMontenegro.pdf"
          
        ></iframe>
        
        
      </div>
    </Layout>
  )
}
