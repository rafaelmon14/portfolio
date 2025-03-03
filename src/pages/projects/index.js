import React from "react";
import '../../styles/projectList.css'
import { graphql, Link, withPrefix } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          description
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 800)
            }
          }
        }
        id
      }
    }
  }
`;

const ProjectCard = ({ project }) => {
  const image = getImage(project.frontmatter.thumb);
  
  return (
    <div className="project-card">
      <GatsbyImage image={image} alt={project.frontmatter.title} className="project-image" />
      <h2 className="project-title">{project.frontmatter.title}</h2>
      <p className="project-description">{project.frontmatter.description}</p>
      <div className="project-technologies">
        {(project.frontmatter.stack.split(",")).map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};

const ProjectList = ({ data }) => {
  const projects = data.projects.nodes;
  return (
    <Layout>
    <section className="project-container">
        
      {/* <h1 className="project-heading">Mis Proyectos</h1> */}
      <div className="project-grid">
        {projects.map((project) => (
            <Link to={project.frontmatter.slug} key={project.id} target='_blank'>
          <ProjectCard key={project.id} project={project} />
          </Link>
        ))}
      </div>
      
    </section>
    </Layout>
  );
};

export default ProjectList;
