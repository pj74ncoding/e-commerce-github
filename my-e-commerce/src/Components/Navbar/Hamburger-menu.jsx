export const HamburgerMenu = ({logoImage, closeHamburgerMenu, }) => {
  return (
    <>
      <div className="hamburger-menu-main-container hide-hamburger-menu">
        <div className="hamburger-menu-container">
          <div className="hamburger-menu-category">
            <img
              className="hamburger-menu-category-image"
              src={logoImage}
              alt="Folded cotton in different colours"
            />
            <h3 style={{ color: "black" }}>MINIMAL COTTON</h3>
          </div>
          <div className="hamburger-menu-category">
            <h3>SHOP</h3>
            <a href="#">
              <span className="material-symbols-outlined">storefront</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>ALL</h3>
            <a href="#">
              <span className="material-symbols-outlined">all_match</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>WOMEN</h3>
            <a href="#">
              <span className="material-symbols-outlined">woman</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>MEN</h3>
            <a href="#">
              <span className="material-symbols-outlined">man</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>ABOUT</h3>
            <a href="#">
              <span className="material-symbols-outlined">info</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>LOGIN</h3>
            <a href="#">
              <span className="material-symbols-outlined">login</span>
            </a>
          </div>
          <div className="hamburger-menu-category">
            <h3>CART</h3>
            <a href="#">
              <span className="material-symbols-outlined">shopping_cart</span>
            </a>
          </div>
        </div>
        <button onClick={closeHamburgerMenu}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
      </div>
    </>
  );
};
