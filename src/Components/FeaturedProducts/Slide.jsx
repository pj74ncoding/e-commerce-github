export const Slide = ({ productList }) => {
  const biggerScreenProductList = productList;
  return (
    <>
      {biggerScreenProductList.map((item) => (
        <div
          id="slide bigger-screen-slide"
          className="slide bigger-screen-slide"
          key={item.product_id}
        >
          <div className="image-container">
            <img
              src={item.image}
              alt="A blue cotton polo shirt with a white collar"
            />
          </div>
          <div className="description">
            <h5>{item.product_name}</h5>
            <p className="price">£{item.price}</p>
            <div className="stars">
              <p>{"⭐".repeat(item.rating)}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
