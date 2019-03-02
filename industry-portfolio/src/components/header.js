import React from 'react'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import "../static/css/css/main.css"
import "../static/css/css/bootstrap.css"

const Header = () => (
  <StaticQuery
  query={graphql`
    query {
      dataJson{
        phoneNumber
    		email
    		logoSocialNetwork{
          logoFontClass
          link
        }
        navabar{
          logo{
            logoPath{
              childImageSharp{
                fixed(width:130){
                  ...GatsbyImageSharpFixed
                }
              }
            }
            logoLink
            logoAlt
          }
          navItems{
            title
            link
          }
        }
      }
    }
  `}
  render={data => {
    const {
      dataJson: { phoneNumber,email,logoSocialNetwork,
                  navabar : {logo : {logoPath,logoLink,logoAlt},navItems,}
    }
                
    
    } = data;
    return (

    <header id="header">
  <div className="header-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
          <ul>
            {
              logoSocialNetwork.map(item =>  (
                <li><a href={`${item.link}`}><i className= {`${item.logoFontClass}`} /></a></li>

              ))
            }
          </ul>
        </div>
        <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
          <a href={`tel:${phoneNumber}`}> {phoneNumber} </a>
          <a href={`mailto:${email}`}> {email} </a>				
        </div>
      </div>			  					
    </div>
  </div>
  <div className="container main-menu">
    <div className="row align-items-center justify-content-between d-flex">
      <div id="logo">
      <a href= {`${logoLink}`} ><Img fixed={logoPath.childImageSharp.fixed} alt= {`${logoAlt}`} /></a>
       {/* <img src={logo} alt="industry" /> */}
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active"><a href="#home">Home</a></li>
          {
            navItems.map(nav=> (
              <li><a href= {`${nav.link}`} > {nav.title} </a></li>

            ))
          }

         {/*  <li><a href="#about">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#service">Projects</a></li> */}

          <li className="menu-has-children"><a href="#">Blog</a>
            <ul>
              <li><a href="#">Blog Home</a></li>
              <li><a href="#">Blog Single</a></li>
            </ul>
          </li>						          
         {/*  <li><a href="#">Contact</a></li>
          <li><a href="#">Elements</a></li> */}
        </ul>
      </nav>{/* #nav-menu-container */}		    		
    </div>
  </div>
</header>


);
}}
/>
);

export default Header;