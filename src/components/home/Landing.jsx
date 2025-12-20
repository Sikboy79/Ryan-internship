import React from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FadeInItem, FadeUpSlowItem, FadeUpFastItem } from "../UI/Animations";
AOS.init();

const Landing = () => {
  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              <FadeInItem>
                <h6>
                  <span className="text-uppercase id-color-2">
                    Ultraverse Market
                  </span>
                </h6>
              </FadeInItem>
              <FadeInItem>
                <FadeUpFastItem delay="400">
                  <div className="spacer-10"></div>
                  <h1>Create, sell or collect digital items.</h1>
                </FadeUpFastItem>
              </FadeInItem>
              <FadeInItem delay="800">
                <FadeUpSlowItem>
                  <p className="lead">
                    Unit of data stored on a digital ledger, called a
                    blockchain, that certifies a digital asset to be unique and
                    therefore not interchangeable
                  </p>
                  <div className="spacer-10"></div>
                </FadeUpSlowItem>
                <Link className="btn-main lead" to="/explore">
                  Explore
                </Link>
              </FadeInItem>
              <div className="mb-sm-30"></div>
            </div>
            <div className="col-md-6 xs-hide">
              <FadeInItem delay="1200">
                <img src={NFT} className="lazy img-fluid" alt="" />
              </FadeInItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
