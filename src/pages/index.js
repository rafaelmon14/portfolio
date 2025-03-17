import * as React from "react"
import { StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"

export default function Home({data}) {
  // const image = getImage(data.file.childImageSharp)
  // const titulo = data.siteMetadata.title;
  // console.log("eta vaina e seria: ", image);
  return (
    <Layout>
      <title>Rafael Montenegro - Portfolio Web</title>
      <section className={styles.header}>
        <div>
          <h2>Rafael Montenegro</h2>
          <h3>Programador Full Stack</h3>
          <p>Ingeniero en Sistemas Informáticos y Computación con pasión por el desarrollo de aplicaciones web y móviles.</p>
          
            <div className={styles.boton}>
              <Link className={styles.btn} to="/projects">Proyectos</Link>
            </div>
          
          
        </div>
        {/* <img src="/P1000468.JPG" width={300} alt="la pishca p"/> */}
      </section>
    </Layout>
  )
}

export const site = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`