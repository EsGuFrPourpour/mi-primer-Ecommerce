import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { fetchData } from "../../fetchData";
import { useParams } from "react-router";


function ItemListContainer() {
  const [loading, setLoading] = useState(true)
  const [allProducts, setAllProducts] = useState(null);
  const {category} = useParams()

  useEffect(() => {
      
    if(!allProducts){
      fetchData()
      .then(response =>{ 
        setAllProducts(response);
          setTimeout(() => {
            setLoading(false);
          },500);
        })
        .catch(err => console.error(err));
    }
    

  }, [category]);

  return (
    loading ?
    <Loader />
    :
    <div className="product-container row row-cols-1 row-cols-md-4 g-9">
      { 
        category ?
        allProducts.filter(el => el.category === category).map(prod =>{
          return(
            <Item key={prod.id} products={prod} />
          );
        })
          :
        allProducts.map(prod =>{
          return(
            <Item key={prod.id} products={prod} />
          )
        })
      }
    </div>
  );
};

export default ItemListContainer;