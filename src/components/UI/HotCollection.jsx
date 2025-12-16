import React from "react";
import { Link } from "react-router-dom";




const HotCollection = ({ hotCollection }) => {
  return (
    <div className="hot-collection-card">
      <Link to={`/item-details/${hotCollection.nftId}`}>
        <div className="hot-collection-image">
          <img src={hotCollection.nftImage} alt={hotCollection.title} />
        </div>
      </Link>
      <div className="hot-collection-info">
        <div className="author-wrapper">
          <Link to={`/author/${hotCollection.authorId}`}>
            <img
              src={hotCollection.authorImage}
              alt="author"
              className="author-img"
            />
          </Link>
          <i className="fa fa-check verify-icon"></i>
        </div>
        <Link to="/explore">
          <h4>{hotCollection.title}</h4>
          <span className="collection-code">ERC-{hotCollection.code}</span>
        </Link>
      </div>
    </div>
  );
};

export default HotCollection;
