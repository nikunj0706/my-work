import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Rating from "../components/rating"

import "../static/css/css/font-awesome.min.css"

import "../static/css/css/owl.carousel.css"
import "../static/css/css/main.css"
import "../static/css/css/bootstrap.css"


const Feedback = () => (
  <StaticQuery
    query={graphql`
      query {
        feedbackJson{
          heading
          subHeading
          videoLink
          image{
            childImageSharp{
              fixed(width: 50){
                ...GatsbyImageSharpFixed
              }
            }
          }
          imageAlt
          feedbackList{
            clientName
            clientReview
            clientRating
          }
        }
      }
    `}
    render={data => {
      const {
        feedbackJson: {heading,subHeading,videoLink, image, imageAlt, feedbackList,},
      } = data;
      return (
    <section className="feedback-area section-gap relative" id="feedback">
  <div className="overlay overlay-bg" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 pb-30 header-text text-center">
        <h1 className="mb-10 text-white"> {heading} </h1>
        <p className="text-white">
          {subHeading}
        </p>
      </div>
    </div>			
    <div className="row feedback-contents justify-content-center align-items-center">
      <div className="col-lg-6 feedback-left relative d-flex justify-content-center align-items-center">
        <div className="overlay overlay-bg" />
        <a className="play-btn" href= {videoLink} >
        <Img fixed={image.childImageSharp.fixed} alt={imageAlt} className="img-fluid" />
        {/* <img className="img-fluid" src= {playbtn} alt="play" /> */}</a>
      </div>
      <div className="col-lg-6 feedback-right">
        <div className="active-review-carusel">
        {
          feedbackList.map(feedback => (
            <div className="single-feedback-carusel">
            <div className="title d-flex flex-row">
              <h4 className="text-white pb-10"> {feedback.clientName} </h4>
              <div className="star" dangerouslySetInnerHTML={ { __html: feedback.clientRating }} />
              {/* <Rating actualStar = "3" totalStar="5" /> */}
            </div>
            <p className="text-white">
              {feedback.clientReview}
            </p>
          </div>

          ))
        }
          
         {/*  <div className="single-feedback-carusel">
            <div className="title d-flex flex-row">
              <h4 className="text-white pb-10">Fannie Rowe</h4>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />								
              </div>										
            </div>
            <p className="text-white">
              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
            </p>
          </div>
          <div className="single-feedback-carusel">
            <div className="title d-flex flex-row">
              <h4 className="text-white pb-10">Fannie Rowe</h4>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked	" />								
              </div>										
            </div>
            <p className="text-white">
              Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
            </p>
          </div>									 */}							
        </div>
      </div>
    </div>
  </div>	
</section>
);
}}
/>
);

export default Feedback;