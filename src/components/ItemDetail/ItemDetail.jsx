import { useState } from "react"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({products, volverAlInicio}) {

    const [count, setCount] = useState(1);

    const {name, price, stock, description, category } = products;

    function addToCart(prod){
        console.log("vas a agregar", {...prod, quantity: count});
        setCount(1)
    };

return(
    <div className="col">
      <div className="card text-center mb-3">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">${category}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">${description}</p>
        <p className="card-text">{stock} disponibles</p>
        <ItemCount stock={stock} count={count} setCount={setCount} />
        <button className="btn btn-secondary" onClick={() => addToCart(products)}>Añadir al carrito</button>
        <button className="btn btn-secondary" onClick={volverAlInicio}>Volver al inicio</button>
      </div>
   </div>  
)
};

export default ItemDetail

