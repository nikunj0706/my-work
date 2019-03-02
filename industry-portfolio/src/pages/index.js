import React from "react"

import Header from "../components/header"
import Banner from "../components/banner"
import Bullets from "../components/bullets"
import About from "../components/about"
import Services from "../components/services"
import Statistics from "../components/statistics"
import Projects from "../components/projects"
import Feedback from "../components/feedback"
import Blog from "../components/blog"
import Footer from "../components/footer"

import ImportScripts from "../components/importScripts"

import "../static/css/css/linearicons.css"
import "../static/css/css/font-awesome.min.css"
import "../static/css/css/bootstrap.css"
import "../static/css/css/magnific-popup.css"
import "../static/css/css/nice-select.css"
import "../static/css/css/hexagons.min.css"
import "../static/css/css/animate.min.css"
import "../static/css/css/owl.carousel.css"
import "../static/css/css/main.css"

const IndexPage = () => (

    <div>

  <Header />

{/* start banner Area */}
  <Banner />
{/* End banner Area */}

{/* Start bullet Area */}
<Bullets />
{/* End bullet Area */}

{/* Start About Area */}
<About />
{/* End About Area */}

{/* Start service Area */}
<Services />
{/* End service Area */}

{/* Start Statistics or faq Area */}
<Statistics />
{/* End Statistics or faq Area */}

{/* Start project Area */}
<Projects />
{/* End project Area */}


{/* Start feedback Area */}
<Feedback />
{/* End feedback Area */}

{/* Start blog Area */}
<Blog />
{/* end blog Area */}

{/* start footer Area */}
<Footer />
{/* End footer Area */}

<ImportScripts />

</div>  
)

export default IndexPage
