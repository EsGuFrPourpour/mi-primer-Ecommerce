import './Item.css';

function Item({products}) {
    const {name, price, stock} = products;
    return(
        <div className="col">
          <div className="card text-center mb-3">
            <h2 className="card-title">{name}</h2>
            <p className="card-text">${price}</p>
            <p className="card-text">{stock} disponibles</p>
            <button className="btn btn-primary">Añadir al carrito</button>
          </div>
       </div>  
    )
};

export default Item;