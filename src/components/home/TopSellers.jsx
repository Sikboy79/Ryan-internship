import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSellerSkeleton from "../UI/TopSellerSkeleton";
import TopSeller from "../UI/TopSeller";
import ErrorComponent from "../UI/ErrorComponent";
import { FadeInItem } from "../UI/Animations";

function TopSellers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
        );
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("failed to load");
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const settings = {
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {error ? (
                <ErrorComponent message={error} />
              ) : isLoading ? (
                <div className="row">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <TopSellerSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <FadeInItem delay="50">
                  <div>
                    {data.map((topSeller) => (
                      <TopSeller topSeller={topSeller} key={topSeller.id} />
                    ))}
                  </div>
                </FadeInItem>
              )}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSellers;
