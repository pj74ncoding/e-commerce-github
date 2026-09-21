import { useState } from "react";

import "./App.css";
import "./screen-sizes.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Categories } from "./Components/Categories";
import clothingData from "./data/clothingData.json";

function App() {
  console.log(clothingData[1].price);
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
