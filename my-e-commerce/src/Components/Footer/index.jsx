export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <section className="main-footer-section">
          <div className="links">
            <div className="category">
              <h4>SHOP</h4>

              <a href="#">Women</a>
              <a href="#">Men</a>
              <a href="#">Accessories</a>
            </div>
            <div className="category">
              <h4>COMPANY</h4>
              <a href="#">Info</a>
              <a href="#">Contact</a>
              <a href="#">Help</a>
            </div>
            <div className="category">
              <h4>ACCOUNT</h4>
              <a href="#">Payments</a>
              <a href="#">Deliveries</a>
              <a href="#">T&C's</a>
            </div>
          </div>

          <div className="newsletter">
            <h4>NEWSLETTER</h4>
            <div className="input-and-button-container">
              <input type="text" />

              <button>JOIN</button>
            </div>
          </div>
          <div className="social-icons">
            <i
              style={{ color: "blue" }}
              className="fa-brands fa-square-facebook"
            ></i>
            <i
              style={{ color: "orange" }}
              className="fa-brands fa-square-instagram"
            ></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i style={{ color: "red" }} className="fa-brands fa-youtube"></i>
          </div>
        </section>
        <div className="copyright">
          <p>&copy;2026 MINIMAL COTTON. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};
