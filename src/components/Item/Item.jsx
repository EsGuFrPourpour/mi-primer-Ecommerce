import { Link } from 'react-router';
import './Item.css';
import { useAppContext } from "../../../context/context"

function Item({products, filterProducts}) {

    const {id, name, price, stock, img} = products;

    const {addToCart} = useAppContext();

    return(
        <div className="col">
          <div className="card text-center mb-3">
          <img src={img || "/placeholder.svg"} alt={name} className="card-img-top" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">${price}</p>
            <p className="card-text">{stock} disponibles</p>
            <Link to={`/detalle/${id}`}>
            <button className="btn btn-secondary">Ver detalles</button>
            </Link>
            <button className="btn btn-secondary" onClick={() => addToCart(products, 1)}>Añadir al carrito</button>
          </div>
       </div>  
    )
};

export default Item;