import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import "../static/css/css/main.css"

const Banner = () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson{
          banner{
            heading
            subHeading
            excerpt
            button
            {
              title
              link
            }
          }
        }
      }
    `}
    render={data => {
      const {
        dataJson: {
          banner : {heading,subHeading,excerpt, button : {title,link}}
        },
      } = data;
      return (

    <section className="banner-area relative" id="home">
  <div className="overlay overlay-bg" />
    <div className="container">
    <div className="row fullscreen d-flex align-items-center justify-content-center">
      <div className="banner-content col-lg-12 col-md-12">
        <h6 className="text-uppercase"> {subHeading} </h6>
        <h1>
          {heading}		
        </h1>
        <p className="text-white" dangerouslySetInnerHTML={ { __html: excerpt }} />
        <a href= {link} className="primary-btn header-btn text-uppercase"> {title} </a>
      </div>												
    </div>
  </div>  
</section>

);
}}
/>
);

export default Banner;