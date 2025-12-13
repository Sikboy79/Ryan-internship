import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function NextArrow(props) {
  const { className, onClick } = props;

  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <span className="arrow-icon">›</span>
    </div>
  );
}

export function PrevArrow(props) {
  const { className, onClick } = props;

  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <span className="arrow-icon">‹</span>
    </div>
  );
}
