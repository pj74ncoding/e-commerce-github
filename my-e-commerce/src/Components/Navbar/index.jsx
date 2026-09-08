import { useState } from "react";
import logoImage from "../../assets/images/colouredcottonspiral.jpg";
import { HamburgerMenu } from "./Hamburger-menu";
export const Navbar = () => {
  const openHamburgerMenu = () => {
    const hamburgerMenuMainContainer = document.querySelector(
      ".hamburger-menu-main-container",
    );

    const nav = document.getElementById("nav");
    const hero = document.getElementById("hero");
    const featuredProducts = document.getElementById("featured-products");
    const categories = document.getElementById("categories");
    const footer = document.getElementById("footer");

    nav.classList.add("blur");
    hero.classList.add("blur");
    featuredProducts.classList.add("blur");
    categories.classList.add("blur");
    footer.classList.add("blur");
    hamburgerMenuMainContainer.classList.remove("hide-hamburger-menu");
  };
  const closeHamburgerMenu = () => {
    const hamburgerMenuMainContainer = document.querySelector(
      ".hamburger-menu-main-container",
    );
    const nav = document.getElementById("nav");
    const hero = document.getElementById("hero");
    const featuredProducts = document.getElementById("featured-products");
    const categories = document.getElementById("categories");
    const footer = document.getElementById("footer");
    hamburgerMenuMainContainer.classList.add("hide-hamburger-menu");
    nav.classList.remove("blur");
    hero.classList.remove("blur");
    featuredProducts.classList.remove("blur");
    categories.classList.remove("blur");
    footer.classList.remove("blur");
    hamburgerMenuMainContainer.classList.add("hide-hamburger-menu");
  };

  return (
    <>
      <div id="nav" className="navbar">
        <div className="company-logo-container">
          <img
            className="company-logo-image"
            src={logoImage}
            alt="Folded cotton in different colours"
          />
          <h2>MINIMAL COTTON</h2>
        </div>

        <div className="departments">
          <a className="shop" href="#">
            SHOP
          </a>
          <a className="all" href="#">
            ALL
          </a>
          <a className="women" href="#">
            WOMEN
          </a>
          <a className="men" href="#">
            MEN
          </a>
          <a className="about" href="#">
            ABOUT
          </a>
        </div>
        <div className="nav-icons">
          <p className="bigger-screen-icons">Login</p>
          <span className="material-symbols-outlined bigger-screen-icons">
            shopping_cart
          </span>
          <span className="material-symbols-outlined icon-size">search</span>
          <span className="material-symbols-outlined icon-size small-screen-icons">
            person
          </span>
          <button
            className="nav-hamburger-icon-button"
            onClick={openHamburgerMenu}
          >
            <span className="material-symbols-outlined icon-size small-screen-icons">
              menu
            </span>
          </button>
        </div>
      </div>

      <HamburgerMenu
        logoImage={logoImage}
        closeHamburgerMenu={closeHamburgerMenu}
      />
    </>
  );
};
