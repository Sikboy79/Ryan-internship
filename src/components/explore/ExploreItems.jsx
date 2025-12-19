import React, { useEffect, useState } from "react";
import axios from "axios";
import Explore from "../UI/Explore";
import ExploreSkeleton from "../UI/ExploreSkeleton";
import ErrorComponent from "../UI/ErrorComponent";

function ExploreItems() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);
  const [filter, setFilter] = useState("");

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setVisibleCount(8);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = filter
          ? `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
          : "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";

        const response = await axios.get(url);
        setData(response.data);
        // setLoading(false);
        setError(null);
      } catch (err) {
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [filter]);

  const settings = {
    slidesToShow: 8,
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
    <>
      <div>
        <select id="filter-items" value={filter} onChange={handleFilterChange}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {error ? (
        <ErrorComponent message={error} />
      ) : isLoading ? (
        <div className="row">
          {Array.from({ length: 8 }).map((_, i) => (
            <ExploreSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          <div className="explore__cards">
            {data.slice(0, visibleCount).map((explore) => (
              <Explore explore={explore} key={explore.nftId} />
            ))}
          </div>
          {visibleCount < data.length && (
            <div className="col-md-12 text-center">
              <button
                id="loadmore"
                className="btn-main lead"
                onClick={handleLoadMore}
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ExploreItems;
