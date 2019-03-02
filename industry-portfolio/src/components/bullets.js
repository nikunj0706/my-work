import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../static/css/css/main.css";
import "../static/css/css/bootstrap.css";
import "../static/css/css/hexagons.min.css";
import "../static/css/css/linearicons.css";

const Bullets = () => (
  <StaticQuery
    query={graphql`
      query {
        allBulletPointsJson {
          edges {
            node {
              icon
              title
              description
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allBulletPointsJson: { edges: bulletPoints }
      } = data;
      return (
        <section className="cat-area section-gap" id="feature">
          <div className="container">
            <div className="row">
              {bulletPoints.map(bulletPoint => (
                <div className="col-lg-4">
                  <div className="single-cat d-flex flex-column">
                    <a href="#" className="hb-sm-margin mx-auto d-block">
                      <span className="hb hb-sm inv hb-facebook-inv">
                        <span className={`lnr ${bulletPoint.node.icon}`} />
                      </span>
                    </a>
                    <h4 className="mb-20" style={{ marginTop: 23 }}>
                      {" "}
                      {bulletPoint.node.title}{" "}
                    </h4>
                    <p>{bulletPoint.node.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      );
    }}
  />
);

export default Bullets;
