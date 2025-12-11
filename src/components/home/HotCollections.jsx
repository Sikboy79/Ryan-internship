import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HotCollection from "../UI/HotCollection";
import ErrorComponent from "../UI/ErrorComponent";


function HotCollections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
        );
        setData(response.data);
        console.log(response.data);
        setLoading(false);
        if (error) setError(null);
      } catch (error) {
        setError("failed to load");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {error ? (
            <ErrorComponent message={error} />
          ) : isLoading ? (
            <>
              {new Array(6).fill(0).map((_, id) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/item-details">
                        <img
                          src={id.nftImage}
                          className="lazy img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/author">
                        <img
                          className="lazy pp-coll"
                          src={id.authorImage}
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
              ))}
            </>
          ) : (
            data.map((hotCollection) => (
              <HotCollection
                hotCollection={hotCollection}
                key={HotCollection.nftId}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default HotCollections;
