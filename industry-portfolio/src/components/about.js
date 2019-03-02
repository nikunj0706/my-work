import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import "../static/css/css/main.css"
import "../static/css/css/bootstrap.css"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson{
          about{
            heading
            subHeading
            description
            button{
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
          about : {heading,subHeading,description, button : {title,link}}
        },
      } = data;
      return (
    <section className="home-about-area section-gap" id="about">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8 col-md-12 home-about-left">
            <h6> {subHeading} </h6>
            <h1 dangerouslySetInnerHTML={ { __html: heading }} />
            
           <div dangerouslySetInnerHTML={ { __html: description }} />
            <a className="primary-btn" href= {link}> {title}</a>
          </div>
          <div className="col-lg-4 col-md-12 home-about-right relative" >
            <form className="form-wrap" action="#">
              <h4 className="text-white pb-20">Request a Quote</h4>
              <div className="form-select" id="service-select">
                <select>
                  <option value={1}>Select Service</option>
                  <option value={2}>Service One</option>
                  <option value={3}>Service Two</option>
                  <option value={4}>Service Three</option>
                  <option value={5}>Service Four</option>
                </select>
              </div>
              <input type="text" className="form-control" placeholder="name" />
              <input type="phone" className="form-control" placeholder="Phone Number" />
              <input type="email" className="form-control" placeholder="Email Address" />
              <textarea name="message" id cols={30} rows={5} placeholder="Message" className="form-control" defaultValue={""} />
              <button className="primary-btn">Request Free Quote</button>
            </form>

          </div>
        </div>
      </div>
    </section>
 );
}}
/>
);

export default About;