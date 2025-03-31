import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { fetchData } from "../../fetchData";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {
  const [loading, setLoading] = useState(true)

  const [allProducts, setAllProducts] = useState(null);

  const [filterProducts, setFilterProducts] = useState(null)
  useEffect(() => {
      
    fetchData(false)
    .then(response =>{ 
      setAllProducts(response);
        setTimeout(() => {
          setLoading(false);
        },500);
      })
    .catch(err => console.error(err))

  }, []);

  return (
    loading ?
    <Loader />
    :
    <div className="product-container row row-cols-1 row-cols-md-4 g-9">
      { allProducts.map(prod =>{
          return(
            <Item key={prod.id} products={prod} filterProducts={setFilterProducts} />
          )
        })
      }
      {
        filterProducts && <ItemDetail products={filterProducts}  volverAlInicio={() => setFilterProducts(null)} />
      }
    </div>
  );
};

export default ItemListContainer;