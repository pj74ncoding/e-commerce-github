import "../../App.css";

export const Categories = () => {
  return (
    <>
      <section id="categories" className="categories-container">
        <h3>CATEGORIES COLLAGE</h3>

        <div className="category-grid">
          <div className="women-segment">
            <h3>WOMEN</h3>
          </div>

          <div className="men-segment">
            <h3>MEN</h3>
          </div>

          <div className="tops-segment">
            <h3>TOPS</h3>
          </div>

          <div className="bottoms-segment">
            <h3>BOTTOMS</h3>
          </div>

          <div className="lounge-segment">
            <h3 className="lounge">LOUNGE</h3>
            <h3 className="lounge-wear">LOUNGEWEAR</h3>
          </div>

          <div className="access-segment">
            <h3>ACCESSORIES</h3>
          </div>
        </div>
      </section>
    </>
  );
};
