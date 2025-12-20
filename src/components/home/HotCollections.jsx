import { useEffect, useState } from "react";
import axios from "axios";
import HotCollection from "../UI/HotCollection";
import ErrorComponent from "../UI/ErrorComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../UI/SliderArrows";
import HotCollectionSkeleton from "../UI/HotCollectionSkeleton";
import { FadeInItem } from "../UI/Animations";

function HotCollections() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            <div className="row">
              {Array.from({ length: 4 }).map((_, i) => (
                <HotCollectionSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div style={{ padding: "20px" }}>
              <Slider {...settings}>
                {data.map((hotCollection) => (
                  <FadeInItem delay="50" key={hotCollection.nftId}>
                    <HotCollection
                      hotCollection={hotCollection}
                    />
                  </FadeInItem>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HotCollections;
