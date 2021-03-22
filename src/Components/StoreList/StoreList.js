import React from "react";
import StoreItem from "./../StoreItem/StoreItem";

const StoreList = ({ store }) => {
  const storeList = store.map((item) => {
    return (
      <StoreItem
        key={item.id}
        id={item.id}
        itemRating={item.rating}
        itemImage={item.imgURL}
        itemName={item.name}
        itemCategory={item.category}
        itemPrice={item.price}
      />
    );
  });
  return storeList;
};

export default StoreList;
