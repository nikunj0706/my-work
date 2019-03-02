import React from 'react'
import "../static/css/css/font-awesome.min.css"
import "../static/css/css/bootstrap.css"
import "../static/css/css/owl.carousel.css"
import "../static/css/css/main.css"
const Rating = (props) => {
    const { actualStar, totalStar } = props;
    let actaulRating = "";
    for(let i=0;i<actualStar;i++){
        actaulRating += "<span class='fa fa-star checked'></span>"

    }
    let uncheckedStar = totalStar - actualStar;
    for(let i=0;i<uncheckedStar;i++){
        actaulRating += "<span class='fa fa-star'></span>"

    }
    return (
       
        <div className="star" dangerouslySetInnerHTML={ { __html: actaulRating }} />
     
    );
  };
  export default Rating;