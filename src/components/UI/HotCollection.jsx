import React from "react";
import { Link } from "react-router-dom";

const HotCollection = ({ hotCollection }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="nft_coll">
          <div className="nft_wrap">
            <Link to="/item-details">
              <img
                src={hotCollection.nftImage}
                className="lazy img-fluid"
                alt=""
              />
            </Link>
          </div>
          <div className="nft_coll_pp">
            <Link to="/author">
              <img
                className="lazy pp-coll"
                src={hotCollection.authorImage}
                alt=""
              />
            </Link>
            <i className="fa fa-check"></i>
          </div>
          <div className="nft_coll_info">
            <Link to="/explore">
              <h4>Pinky Ocean</h4>
            </Link>
            <span>ERC-192</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotCollection;
