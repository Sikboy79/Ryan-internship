import React from "react";
import { Link } from "react-router-dom";
import { SlideRightItem }  from "../UI/Animations";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="100">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-image"></i>
              <span>Art</span>
            </Link>
            </SlideRightItem>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="200">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-music"></i>
              <span>Music</span>
            </Link>
            </SlideRightItem>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="300">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-search"></i>
              <span>Domain Names</span>
            </Link>
            </SlideRightItem>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="400">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-globe"></i>
              <span>Virtual Worlds</span>
            </Link>
            </SlideRightItem>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="500">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-vcard"></i>
              <span>Trading Cards</span>
            </Link>
            </SlideRightItem>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <SlideRightItem delay="600">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-th"></i>
              <span>Collectibles</span>
            </Link>
            </SlideRightItem>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
