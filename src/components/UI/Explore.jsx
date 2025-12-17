import React from "react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";

function Explore({ explore }) {
  return (
    <div
      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
      style={{ display: "flex", backgroundSize: "cover" }}
    >
      <div className="nft__item">
        <div className="author_list_pp">
          <Link to="/author" data-bs-toggle="tooltip" data-bs-placement="top">
            <img className="lazy" src={explore.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        <CountdownTimer expiryDate={explore.expiryDate} />

        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
              <div className="nft__item_share">
                <h4>Share</h4>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook fa-lg"></i>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <i className="fa fa-twitter fa-lg"></i>
                </a>
                <a href="">
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        <Link to={`/item-details/${explore.nftId}`}>
          <img
            src={explore.nftImage}
            className="lazy nft__item_preview"
            alt="Loading..."
          />
        </Link>
        </div>
          <div className="nft__item_info">
            <h4>{explore.title}</h4>
            <div className="nft__item_price">{explore.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{explore.likes}</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Explore;
