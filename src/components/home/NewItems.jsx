import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorComponent from "../UI/ErrorComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../UI/SliderArrows";
import NewItem from "../UI/NewItem";
import NewItemSkeleton from "../UI/NewItemSkeleton";

const NewItems = (newItem) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
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
  console.log(data);

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
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {error ? (
            <ErrorComponent message={error} />
          ) : isLoading ? (
            <div className="row">
              {Array.from({ length: 4 }).map((_, i) => (
                <NewItemSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div style={{ padding: "20px" }}>
              <Slider {...settings}>
                {data.map((newItem) => (
                  <NewItem newItem={newItem} key={newItem.nftId} />
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
