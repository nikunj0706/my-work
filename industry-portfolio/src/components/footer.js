import React from "react"
import { StaticQuery, graphql } from "gatsby";

import "../static/css/css/font-awesome.min.css"
import "../static/css/css/bootstrap.css"
import "../static/css/css/main.css"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson{
          footer{
            aboutUs{
              title
              description
              copyright
            }
            newsLetter{
              newsTitle
              newsSubTitle
            }
            followUs{
              socialTitle
              socialSubTitle
            }
          }
          logoSocialNetwork{
            logoFontClass
            link
          }
        }
      }
    `}
    render={data => {
      const {
        dataJson:
         {
           footer:{aboutUs : {title,description,copyright},
           newsLetter : {newsTitle,newsSubTitle},
           followUs : {socialTitle,socialSubTitle}
                  },
                  logoSocialNetwork,
         },
      } = data;
      return (



    <footer className="footer-area section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h6> {title} </h6>
          <p>
            {description}
          </p>
          <p className="footer-text" dangerouslySetInnerHTML={ { __html:copyright}} />
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      							
        </div>
      </div>
      <div className="col-lg-5  col-md-6 col-sm-6">
        <div className="single-footer-widget">
          <h6> {newsTitle} </h6>
          <p> {newsSubTitle} </p>
          <div  id="mc_embed_signup">
            <form target="_blank" noValidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
              <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required type="email" />
              <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
              <div style={{position: 'absolute', left: '-5000px'}}>
                <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
              </div>
              <div className="info" />
            </form>
          </div>
        </div>
      </div>						
      <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
        <div className="single-footer-widget">
          <h6> {socialTitle} </h6>
          <p> {socialSubTitle} </p>
          <div className="footer-social d-flex align-items-center">
          {
              logoSocialNetwork.map(item =>  (
                <a href={`${item.link}`}><i className= {`${item.logoFontClass}`} /></a>

              ))
            }
             {/* <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-dribbble" /></a>
            <a href="#"><i className="fa fa-behance" /></a>  */}
          </div>
        </div>
      </div>							
    </div>
  </div>
</footer>	
);
}}
/>
);
export default Footer;