import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../static/css/css/main.css";
import "../static/css/css/bootstrap.css";

const Statistics = () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          statistics {
            name
            total
          }
        }
      }
    `}
    render={data => {
      const {
        dataJson: { statistics }
      } = data;
      return (
        <section className="faq-area section-gap relative">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {statistics.map(item => (
                <div className="col-lg-3 col-md-6">
                  <div className="single-faq">
                    <div className="circle">
                      <div className="inner" />
                    </div>
                    <h5>
                      <span className="counter"> {item.total} </span>+
                    </h5>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}

              {/*  <div className="col-lg-3 col-md-6">
        <div className="single-faq">
          <div className="circle">
            <div className="inner" />
          </div>
          <h5><span className="counter">5.5</span>K</h5>
          <p>
            Total Employees
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="single-faq">
          <div className="circle">
            <div className="inner" />
          </div>
          <h5 className="counter">959</h5>
          <p>
            Happy Clients
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="single-faq">
          <div className="circle">
            <div className="inner" />
          </div>
          <h5 className="counter">367</h5>
          <p>
            Tickets Submited
          </p>
        </div>
      </div>						 */}
            </div>
          </div>
        </section>
      );
    }}
  />
);

export default Statistics;
