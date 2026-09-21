import { useEffect, useState } from "react";

export const SlideSmallScreens = ({ productList }) => {
  const smallScreenProductList = productList;
  const [index, setIndex] = useState(0);
  const LENGHT_OF_SMALLSCREENPRODUCTLIST = smallScreenProductList.length - 1;

  const prev = () => {
    if (index == 0) {
      setIndex(LENGHT_OF_SMALLSCREENPRODUCTLIST - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index == LENGHT_OF_SMALLSCREENPRODUCTLIST - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div onClick={prev} className="small-screen-left-chevron">
        <span className="material-symbols-outlined">chevron_left</span>
      </div>
      <div className="slide" key={smallScreenProductList[index].product_id}>
        <div className="image-container">
          <img
            className="slide-small-screen-image"
            src={smallScreenProductList[index].image}
            alt=""
          />
        </div>
        <div className="description">
          <h5>{smallScreenProductList[index].product_name}</h5>
          <p className="price">£{smallScreenProductList[index].price}</p>
          <div className="stars">
            <p className="paragraph-star">
              {"⭐".repeat(smallScreenProductList[index].rating)}
            </p>
          </div>
        </div>
      </div>
      <div onClick={next} className="small-screen-right-chevron">
        <span className="material-symbols-outlined">chevron_right</span>
      </div>
    </>
  );
};
