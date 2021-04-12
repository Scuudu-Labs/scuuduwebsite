import React from "react";
import "./StoreItem.css";
import ItemRating from "react-star-ratings";

const StoreItem = ({
  id,
  itemName,
  itemCategory,
  itemPrice,
  itemImage,
  itemRating,
}) => {
  return (
    <div className="sw-store-item-container">
      <aside className="item-container--image-section">
        <img src={itemImage} alt="store item" className="item-image" />
      </aside>
      <aside className="item-container--description-section">
        <div className="description-section--rating">
          <ItemRating
            rating={itemRating}
            starRatedColor="#ffd700"
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="3px"
          />
          <span className="rating-count">({itemRating})</span>
        </div>
        <div className="description-section--item-info">
          <p className="description-section__category">{itemCategory}</p>
          <p className="description-section__item-name">{itemName}</p>
          <p className="description-section__item-price">NGN {itemPrice}</p>
        </div>
      </aside>

      <button type="button">Buy Now</button>
    </div>
  );
};

export default StoreItem;
