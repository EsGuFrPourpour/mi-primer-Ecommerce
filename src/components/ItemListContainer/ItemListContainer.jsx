import React, { useEffect } from "react";
import './ItemListContainer.css';
import { products } from "../../products";
import Item from "../Item/Item";

function ItemListContainer() {

  useEffect(() => {
    console.log("a ver ahora", products);
  }, []);
  return (
    <div className="product-container row row-cols-1 row-cols-md-4 g-9">
      {
        products.map(prod =>{
          return(
            <Item key={prod.id} products={prod}/>
          )
        })
      }
    </div>
  );
};

export default ItemListContainer;