import React from "react";
import bannerImage from "../../assets/BookBanner.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
