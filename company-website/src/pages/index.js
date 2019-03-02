import React from "react"

import ImportScripts from "../components/importScripts"

import drive16 from "../static/images/drive/16.jpg"
import bg17 from "../static/images/bg/17.png"
import bg18 from "../static/images/bg/18.png"
import logoFooter from "../static/images/logo-footer.png"
import bg12 from "../static/images/bg/12.png"
import blog1 from "../static/images/blog/blog1.jpg"
import blog2 from "../static/images/blog/blog2.jpg"
import blog3 from "../static/images/blog/blog3.jpg"
import device1 from "../static/images/device/awesome-img1.png"
import device3 from "../static/images/device/awesome-img3.png"
import device4 from "../static/images/device/awesome-img4.png"
import device5 from "../static/images/device/awesome-img5.png"
import device6 from "../static/images/device/awesome-img6.png"

import "../static/css/bootstrap.min.css"
import "../static/css/owl-carousel/owl.carousel.css"
import "../static/css/font-awesome.css"
import "../static/css/magnific-popup/magnific-popup.css"
import "../static/css/mediaelementplayer.min.css"
import "../static/css/animate.css"
import "../static/css/ionicons.min.css"
import "../static/css/style.css"
import "../static/css/responsive.css"
import "../static/css/custom.css"

const IndexPage = () => (
 <div>

{/* loading */}
{/* <div id="loading">
  <div id="loading-center">
    <div className="loader">
      <div className="cube">
        <div className="sides">
          <div className="top" />
          <div className="right" />
          <div className="bottom" />
          <div className="left" />
          <div className="front" />
          <div className="back" />
        </div>
      </div>
    </div>
  </div>
</div>  */}
{/* loading End */}



  {/* Header */}
  <header id="main-header" className="dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <img className="img-fluid logo_img" id="logo_img" src= {logoFooter} alt="#" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="ion-navicon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="#iq-home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#how-it-works">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#software-features">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#great-features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* Banner */}
  <section className="overview-block-ptb iq-breadcrumb iq-banner-13 text-left iq-over-blue-30 " id="iq-home">
    <div className="banner-text">
      <div className="container">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-lg-7 ">
            <img src= {bg17} className="banner-img img-fluid iq-pr-50" alt="bg17" />
            <img src= {bg18} className="img-fluid banner-ani wow fadeInRight" alt="bg18" />
          </div>
          <div className="col-lg-5 text-left">
            <h2 className="iq-mb-20 iq-tw-9 r-mt-30">Lorem Ipsum has been the industry's standard dummy text</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book.</p>
            <a href="javascript:void(0)" className="button bt-black iq-mt-5 ">Download</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Banner End */}

  <section id="how-works" className="overview-block-pb how-works r-mt-40 iq-rmt-80">
  <div className="container-fluid">
    <div className="row  flex-row-reverse">
      <div className="col-lg-6 col-md-6">
        <img className="iq-works-imgs img-fluid" src= {bg12} alt="drive01" />
      </div>
      <div className="col-lg-4 col-md-5 align-self-center">
        <h2 className="iq-mb-25 iq-tw-6">Simply dummy text</h2>
        <p className="iq-font-15">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <a href="javascript:void(0)" className="button  iq-mt-5 ">Download</a>
      </div>
    </div>
  </div>
</section>





  {/* Software Features */}
  <section id="great-features" className="life-work-1 overview-block-pt iq-mt-neg software">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img className="img-fluid" src= {drive16} alt="drive05" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2 className="iq-tw-6 iq-mt-70">Software Features</h2>
          <p className="iq-font-15">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul className="iq-mt-40 iq-list">
            <li className="iq-tw-6"><i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" /><span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and setting industry.</span></li>
            <li className="iq-tw-6"><i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" /><span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and setting industry.</span></li>
            <li className="iq-tw-6"><i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" /><span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and setting industry.</span></li>
            <li className="iq-tw-6"><i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" /><span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and setting industry.</span></li>
            <li className="iq-tw-6"><i className="ion-android-done-all iq-mr-10 iq-font-blue iq-font-30" /><span className="iq-font-black">Simply dummy text of the Lorem Ipsum is printing and setting industry.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Software Features END */}
  {/* Great Screenshots */}
  <section className="overview-block-ptb iq-bg-over  iq-over-blue-80 iq-tool-feature  iq-font-white">
    <div className="soft-about">
      <img className="box-img1 img-fluid wow fadeInUp" alt = "device1" src= {device1} data-wow-duration="1.5s" style={{visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInUp'}} />
      <img className="box-img6 img-fluid wow fadeInUp" alt = "device6" src= {device6} data-wow-duration="2.5s" style={{visibility: 'visible', animationDuration: '2.5s', animationName: 'fadeInUp'}} />
      <img className="box-img3 img-fluid wow rotateIn" alt = "device3" src= {device3} data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'rotateIn'}} />
      <img className="box-img4 img-fluid wow fadeInRight" alt = "device4" src= {device4} data-wow-duration="1.5s" style={{visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInRight'}} />
      <img className="box-img5 img-fluid wow rotateInUpRight" alt = "device5" src= {device5} data-wow-duration="1.5s" style={{visibility: 'visible', animationDuration: '1.5s', animationName: 'rotateInUpRight'}} />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <h2 className="iq-tw-6 iq-mt-100 iq-mb-20 iq-font-white">How To use Sofbox ?</h2>
          <p className="iq-font-15">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="col-lg-6 col-md-12 soft-about">
        </div>
      </div>
    </div>
  </section>
  {/* Great Screenshots END */}

  {/* Latest Blog Post */}
<section id="blog" className="overview-block-ptb grey-bg iq-blog">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="heading-title">
          <h3 className="title iq-tw-7">Latest Blog Post</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="owl-carousel" data-autoplay="false" data-loop="false" data-nav="false" data-dots="false" data-items={3} data-items-laptop={3} data-items-tab={2} data-items-mobile={2} data-items-mobile-sm={1} data-margin={30}>

        
          
           <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog1} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div>
                <div className="blog-content">
                  <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                </div>
                <div className="iq-blog-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
        

          <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog2} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div>
                <div className="blog-content">
                  <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                </div>
                <div className="iq-blog-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          
          
          <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog3} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div>
                <div className="blog-content">
                  <p>Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet, consectetur adipisicing elit. hic perspiciatis.</p>
                </div>
                <div className="iq-blog-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-user-circle" aria-hidden="true" /> Tom Herry</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-calendar" aria-hidden="true" /> 12 Aug 2017</a></li>
                    <li className="list-inline-item"><a href="javascript:void(0)"><i className="fa fa-comment-o" aria-hidden="true" /> 5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        


        </div>
      </div>
    </div>
  </div>
</section>
{/* Latest Blog Post END */}








{/* Pojects */}
<div className="iq-our-clients white-bg iq-ptb-50">
  <div className="container">
  <div className="row">
      <div className="col-sm-12">
        <div className="heading-title">
          <h3 className="title iq-tw-7">TRIMSHA Projects</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items={3} data-items-laptop={3} data-items-tab={2} data-items-mobile={2} data-items-mobile-sm={1} data-margin={30}>

        
          
           <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog1} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div>
                
              </div>
            </div>
          </div>

          
        

          <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog2} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div>
                </div>
            </div>
          </div>
         
          
          
          <div className="item">
            <div className="iq-blog-box">
              <div className="iq-blog-image clearfix">
                <img className="img-fluid center-block" src= {blog3} alt="#" />
              </div>
              <div className="iq-blog-detail">
                <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6 iq-mb-10">Blogpost With Image</h5> </a> </div> 
              </div>
            </div>
          </div>

        


        </div>
      </div>
    </div>
  </div>
</div>
{/* Projects END */}
      
  <section className="overview-block-ptb blue-bg text-center iq-font-white ">
    <div className="container">
      <h2 className="iq-tw-6 iq-pb-20 iq-font-white">Get Started Today</h2>
      <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
      <a href="javascript:void(0)" className="button bt-black iq-mt-10">Let's Started</a>
    </div>
  </section>



  <div id="contact" className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-12 text-left iq-font-dark">
          <div className="iq-ptb-20">© Copyright 2018 Sofbox Developed by <b>iqonicthemes</b>.</div>
        </div>
        <div className="col-md-5 col-lg-4 col-sm-12 align-self-center">
          <ul className="info-share text-center text-sm-right">
            <li><a href="javascript:void(0)"><i className="fa fa-twitter" /></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-facebook" /></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-google" /></a></li>
            <li><a href="javascript:void(0)"><i className="fa fa-github" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>



 <div id="back-to-top">
  <a className="top" id="top" href="#iq-home"> <i className="ion-ios-upload-outline" /> </a>
</div>

<ImportScripts />



</div>

)

export default IndexPage
