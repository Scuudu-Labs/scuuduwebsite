import React, { useState } from "react";
import StoreNavBar from "../StoreNavBar/StoreNavBar";
import StoreTabs from "./../StoreTabs/StoreTabs";
import itemImage1 from "../../assets/store-images/1505.png";
import itemImage2 from "../../assets/store-images/1506.png";

import StoreList from "./../StoreList/StoreList";
import Pagination from "../Pagination/Pagination";

import "./Store.css";

const storeItems = [
  {
    id: 1,
    imgURL: itemImage1,
    name: "T-Shirt Green",
    category: "Scuudu T Shirt",
    price: "10,000",
    rating: 5,
  },
  {
    id: 2,
    imgURL: itemImage2,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 3,
    imgURL: itemImage2,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 4,
    imgURL: itemImage2,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 5,
    imgURL: itemImage2,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 6,
    imgURL: itemImage1,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 7,
    imgURL: itemImage1,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 8,
    imgURL: itemImage1,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
  {
    id: 9,
    imgURL: itemImage1,
    name: "T-Shirt black",
    category: "Scuudu T Shirt",
    price: "12,000",
    rating: 4,
  },
];

const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = storeItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="sw-store">
      <header className="sw-store--header">
        <StoreNavBar />
        <section className="sw-store--header--hero">
          <h1>Think. Design. create.</h1>
        </section>
      </header>
      <main className="sw-store-main-body">
        <StoreTabs />
        <section className="sw-store--store-list">
          <StoreList store={currentItems} />
        </section>
        <section>
          <Pagination
            totalPosts={storeItems.length}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </section>
      </main>
      <footer className="sw-store-footer">
        <div>© 2020 Scuudu Labs. All Rights Reserved. </div>
      </footer>
    </div>
  );
};

export default Store;
