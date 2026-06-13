import React from "react";
import HeroSlider from "../components/HeroSlider";
import Category from "../components/Category";
import TrendingProducts from "../components/TrendingProducts";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Category></Category>
      <TrendingProducts></TrendingProducts>
    </div>
  );
};

export default Home;