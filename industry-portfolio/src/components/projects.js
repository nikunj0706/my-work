import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import "../static/css/css/main.css"
import "../static/css/css/bootstrap.css"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        projectsJson{
          heading
          subHeading
          projectsList{
            image{
              publicURL
              childImageSharp{
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageAlt
            className
          }
        }
      }
    `}
    render={data => {
      const {
        projectsJson: {heading,subHeading, projectsList,},
      } = data;
      return (

    <section className="project-area section-gap" id="project">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 pb-30 header-text text-center">
        <h1 className="mb-10"> {heading} </h1>
        <p>
          {subHeading}
        </p>
      </div>
    </div>						
    <div className="row">
    {
      projectsList.map(project => (
        <div className={`${project.className}`}>
        <a href={project.image.publicURL} className="img-gal">
        <Img fluid={project.image.childImageSharp.fluid} alt={project.imageAlt} className="img-fluid single-project" />

          {/* <img className="img-fluid single-project" src= {p1} alt = "p1" /> */}
        </a>	
      </div>

      )) 
    }
    </div>
  </div>	
</section>
);
}}
/>
);

export default Projects;