import { useEffect, useState } from "react";
import { Slide } from "./Slide";
import { SlideSmallScreens } from "./Slide-small";

export const FeaturedProducts = () => {
  const num = 0.55445;
  const result = String(num).split("0.5")[1];
  // console.log(result); // "055445"

  const [windowSize, setWindowSize] = useState(0);
  const [position, setPosition] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);

  const biggerScreenSlideContainer = document.getElementById(
    "bigger-screen-slide-container",
  );
  const biggerScreenLeftChevron = document.getElementById(
    "bigger-screen-left-chevron",
  );
  const biggerScreenRightChevron = document.getElementById(
    "bigger-screen-right-chevron",
  );

  const productList = [
    {
      product_id: Math.random(),
      product_name: "Mens Cotton Jumper",
      size: "S",
      color: "Khaki",
      grade: "C",
      rating: 5,
      image: "/images/jumper-one.jpg",
      material: "Cotton",
      price: 29.99,
      brand: "Tagfeed",
      season: "Winter",
    },
    {
      product_id: Math.random(),
      product_name: "Womens Cotton Jumper",
      size: "XL",
      color: "Cream",
      grade: "B",
      rating: 3,
      image: "/images/women-jumper-one.jpg",
      material: "Cotton",
      price: 39.99,
      brand: "Divavu",
      season: "winter",
    },
    {
      product_id: Math.random(),
      product_name: "Rustic Collection",
      size: "L",
      color: "Mixed",
      grade: "C",
      rating: 5,
      image: "/images/rustic.jpg",
      material: "Cotton",
      price: 45,
      brand: "Zava",
      season: "Winter",
    },

    {
      product_id: Math.random(),
      product_name: "Mens Cotton Polo",
      size: "M",
      color: "Dark Blue",
      grade: "B",
      rating: 4,
      image: "/images/mens-polo-one.jpg",
      material: "Cotton",
      price: 28.76,
      brand: "Foxes",
      season: "All",
    },
    {
      product_id: Math.random(),
      product_name: "Womens Cotton Jumper",
      size: "M",
      color: "Multi-coloured",
      grade: "B",
      rating: 4,
      image: "/images/womens-jumper-two.jpg",
      material: "Cotton",
      price: 34.99,
      brand: "Vixens",
      season: "Winter",
    },

    {
      product_id: Math.random(),
      product_name: "Mens Cotton Polo",
      size: "M",
      color: "Black",
      grade: "B",
      rating: 3,
      image: "/images/mens-polo-two.jpg",
      material: "Cotton",
      price: 28.76,
      brand: "Blognation",
      season: "All",
    },
    {
      product_id: Math.random(),
      product_name: "Womens Cotton Jumper",
      size: "S",
      color: "White",
      grade: "A",
      rating: 5,
      image: "/images/womens-jumper-three.jpg",
      material: "Cotton",
      price: 39.99,
      brand: "Flashspan",
      season: "Autumn",
    },

    {
      product_id: Math.random(),
      product_name: "Womens Cotton Polo",
      size: "M",
      color: "Striped",
      grade: "B",
      rating: 4,
      image: "/images/womens-polo-one.jpg",
      material: "Cotton",
      price: 28.76,
      brand: "Vixens",
      season: "All",
    },
    {
      product_id: Math.random(),
      product_name: "Mens Cotton Shirt",
      size: "M",
      color: "brown",
      grade: "B",
      rating: 4,
      image: "/images/mens-shirt.jpg",
      material: "Cotton",
      price: 32.99,
      brand: "1888",
      season: "All",
    },
    {
      product_id: Math.random(),
      product_name: "Womens Stylish Coat",
      size: "S",
      color: "Red",
      grade: "A",
      rating: 5,
      image: "/images/womens-coat.jpg",
      material: "Cotton",
      price: 79.99,
      brand: "Laybrook",
      season: "Autumn",
    },

    {
      product_id: Math.random(),
      product_name: "Mens Leather Belt",
      size: "M",
      color: "Tanned",
      grade: "B",
      rating: 4,
      image: "/images/belt.jpg",
      material: "Leather",
      price: 24.99,
      brand: "Cowhide",
      season: "All",
    },
    {
      product_id: Math.random(),
      product_name: "Mens Stylish Coat",
      size: "M",
      color: "brown",
      grade: "B",
      rating: 5,
      image: "/images/mens-coat.jpg",
      material: "Cotton",
      price: 69.99,
      brand: "Fenchair",
      season: "Autumn",
    },
  ];

  const moveLeft = () => {
    console.log(slidePosition, "sl-left");
    if (windowSize <= 992) {
      if (slidePosition == 3) {
        return;
      } else {
        setSlidePosition((current) => current + 1);
        setPosition((current) => current - 25);
        biggerScreenRightChevron.classList.remove("chevron-hidden");
      }
    } else if (windowSize <= 1024) {
      if (slidePosition == 2) {
        return;
      } else {
        setSlidePosition((current) => current + 1);
        setPosition((current) => current - 33.3);
        biggerScreenRightChevron.classList.remove("chevron-hidden");
      }
    } else if (slidePosition == 1) {
      return;
    } else {
      setSlidePosition((current) => current + 1);
      setPosition((current) => current - 50);
      biggerScreenRightChevron.classList.remove("chevron-hidden");
      biggerScreenLeftChevron.classList.add("chevron-hidden");
    }
  };

  const moveRight = () => {
    console.log(slidePosition, "sl-right");
    if (windowSize <= 992) {
      if (slidePosition == 0) {
        return;
      } else {
        biggerScreenLeftChevron.classList.remove("chevron-hidden");
        setSlidePosition((current) => current - 1);
        setPosition((current) => current + 25);
      }
    } else if (windowSize <= 1024) {
      if (slidePosition == 0) {
        return;
      } else {
        biggerScreenRightChevron.classList.add("chevron-hidden");
        biggerScreenLeftChevron.classList.remove("chevron-hidden");
        setSlidePosition((current) => current - 1);
        setPosition((current) => current + 33.3);
      }
    } else if (slidePosition == 0) {
      return;
    } else {
      biggerScreenRightChevron.classList.add("chevron-hidden");
      biggerScreenLeftChevron.classList.remove("chevron-hidden");
      setSlidePosition((current) => current - 1);
      setPosition((current) => current + 50);
    }
  };

  window.addEventListener("load", () => {
    setWindowSize(window.innerWidth);
  });
  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  useEffect(() => {
    console.log(slidePosition, "useeffectsl", windowSize, "ws");
    if (slidePosition == 0) {
      if (biggerScreenRightChevron) {
        biggerScreenRightChevron.classList.add("chevron-hidden");
      }
    }

    if (windowSize <= 820) {
      if (slidePosition == 3) {
        biggerScreenLeftChevron.classList.add("chevron-hidden");
      } else if (slidePosition == 1) {
        biggerScreenRightChevron.classList.remove("chevron-hidden");
        biggerScreenLeftChevron.classList.remove("chevron-hidden");
      }
    } else if (windowSize <= 1024) {
      if (slidePosition == 2) {
        biggerScreenLeftChevron.classList.add("chevron-hidden");
      }
      if (slidePosition == 1) {
        biggerScreenRightChevron.classList.remove("chevron-hidden");
      }
    }
  }, [slidePosition, windowSize]);

  const styling = {
    transform: `translate(${position}%`,
    transition: `transform 2s ease`,
  };

  return (
    <>
      <div id="featured-products" className="featured-products">
        <div className="heading-and-chevron-container">
          <h3>FEATURED PRODUCTS</h3>
          <div className="chevron-container">
            <div className="heading-left-chevron">
              <span className="material-symbols-outlined">chevron_left</span>
            </div>
            <div className="heading-right-chevron">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
        </div>

        {/* ======================================================================= */}

        {/* small secreen carousel -------------------------------------------------*/}

        <div className="carousel-container">
          <div className="carousel">
            <SlideSmallScreens productList={productList} />
          </div>
        </div>

        {/* Bigger screen carousel--------------------------------------------------*/}
        <div className="bigger-screen-carousel-container">
          <div
            id="bigger-screen-left-chevron"
            className="bigger-screen-left-chevron"
            onClick={moveLeft}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </div>

          <div id="bigger-screen-carousel" className="bigger-screen-carousel">
            <div
              style={styling}
              id="bigger-screen-slide-container"
              className="bigger-screen-slide-container"
            >
              <Slide productList={productList} />
            </div>
          </div>
          <div
            id="bigger-screen-right-chevron"
            className="bigger-screen-right-chevron chevron-hidden"
            onClick={moveRight}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </div>
    </>
  );
};
