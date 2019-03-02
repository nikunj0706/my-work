import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import "../static/css/css/linearicons.css";
import "../static/css/css/bootstrap.css";
import "../static/css/css/main.css";

const Blog = () => (
  <StaticQuery
    query={graphql`
      query {
        blogJson {
          heading
          subHeading
          blogList {
            image {
              childImageSharp {
                fixed (width: 360){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            imageAlt
            blogger {
              bloggerImage {
                childImageSharp {
                  fixed (width: 30){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              bloggerImageAlt
              bloggerName
              bloggerLink
            }
            date
            like
            comment
            title
            titleLink
            description
          }
        }
      }
    `}
    render={data => {
      const {
        blogJson: { heading, subHeading, blogList, },
      } = data;
      return (
        <section className="blog-area section-gap" id="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-30 header-text">
                <h1> {heading} </h1>
                <p dangerouslySetInnerHTML={ { __html: subHeading }} />
              </div>
            </div>
            <div className="row">
              {blogList.map(blog => (
                <div className="single-blog col-lg-4 col-md-4">
                  <div className="thumb">
                  <Img fixed={blog.image.childImageSharp.fixed} alt={blog.imageAlt} className="f-img img-fluid mx-auto" />
                   {/*  <img
                      className="f-img img-fluid mx-auto"
                      src={b1}
                      alt="b1"
                    /> */}
                  </div>
                  <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                    <Img fixed={blog.blogger.bloggerImage.childImageSharp.fixed} alt={blog.blogger.bloggerImageAlt} className="img-fluid" />
                      {/* <img className="img-fluid" src={user} alt="user" /> */}
                      <a href={blog.blogger.bloggerLink}>
                        <span> {blog.blogger.bloggerName} </span>
                      </a>
                    </div>
                    <div className="meta">
                      {blog.date}
                      <span className="lnr lnr-heart" /> {blog.like}
                      <span className="lnr lnr-bubble" /> {blog.comment}
                    </div>
                  </div>
                  <a href={blog.titleLink}>
                    <h4> {blog.title} </h4>
                  </a>
                  <p>{blog.description}</p>
                </div>
              ))}

              {/*  <div className="single-blog col-lg-4 col-md-4">
        <div className="thumb">
          <img className="f-img img-fluid mx-auto" src={b2} alt="b2" />	
        </div>
        <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <img className="img-fluid" src= {user} alt = "user" />
            <a href="#"><span>Mark Wiens</span></a>
          </div>
          <div className="meta">
            13th Dec
            <span className="lnr lnr-heart" /> 15
            <span className="lnr lnr-bubble" /> 04
          </div>
        </div>							
        <a href="#">
          <h4>Portable Fashion for young women</h4>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.
        </p>
      </div>
      <div className="single-blog col-lg-4 col-md-4">
        <div className="thumb">
          <img className="f-img img-fluid mx-auto" src={b3} alt="b3" />	
        </div>
        <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <img className="img-fluid" src={user} alt="user" />
            <a href="#"><span>Mark Wiens</span></a>
          </div>
          <div className="meta">
            13th Dec
            <span className="lnr lnr-heart" /> 15
            <span className="lnr lnr-bubble" /> 04
          </div>
        </div>							
        <a href="#">
          <h4>Portable Fashion for young women</h4>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.
        </p>
      </div>												 */}
            </div>
          </div>
        </section>
      );
    }}
  />
);

export default Blog;
