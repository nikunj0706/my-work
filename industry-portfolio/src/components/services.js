import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import "../static/css/css/main.css";
import "../static/css/css/bootstrap.css";


const Services = () => (
  <StaticQuery
    query={graphql`
      query {
        servicesJson {
          heading
          subHeading
          servicesList {
            image {
              childImageSharp {
                fixed(width: 360){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            imageAlt
            title
            description
          }
        }
      }
    `}
    render={data => {
      const {
        servicesJson: {heading,subHeading, servicesList,},
      } = data;
      return (
        <section className="service-area section-gap" id="service">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-30 header-text text-center">
                <h1 className="mb-10"> {heading} </h1>
                <p> {subHeading} </p>
              </div>
            </div>
            <div className="row">
            {
              servicesList.map(item=> (
                <div className="col-lg-4">
                <div className="single-service">
                  <div className="thumb">
                  <Img fixed={item.image.childImageSharp.fixed} alt={item.imageAlt} className="img-fluid" />
                   {/* <img src={s1} alt= {item.imageAlt} /> */}
                  </div>
                  <h4> {item.title} </h4>
                  <p>
                  {item.description}
                  </p>
                </div>
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

export default Services;
