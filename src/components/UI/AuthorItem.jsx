import React from "react";
import { Link } from "react-router-dom";

function AuthorItem({ nft, author }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="nft__item">
        <div className="author_list_pp">
          {author?.authorImage && (
            <img src={author.authorImage} alt={author.authorName} />
          )}
          <i className="fa fa-check"></i>
        </div>
        <div className="nft__item_wrap">
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              <button>Buy Now</button>
            </div>
          </div>
          <Link to={`/item-details/${nft.nftId}`}>
            <img
              src={nft.nftImage}
              className="lazy nft__item_preview"
              alt={nft.title || "NFT"}
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to={`/item-details/${nft.nftId}`}>
            <h4>{nft.title ?? "Untitled NFT"}</h4>
          </Link>
          <div className="nft__item_price">{nft.price ?? "2.52 ETH"}</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{nft.likes ?? 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorItem;
