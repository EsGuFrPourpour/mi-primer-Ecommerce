import "./CartDetail.css";
import { Link } from "react-router";
import { useAppContext } from "../../../context/context";

function CartDetail() {
  const { cart } = useAppContext();

  const finalPrice = cart.reduce((acc, product) => acc + product.price * product.cant, 0).toFixed(2);

  return (
    <div className="cart-detail-page">
      <h2>Detalle del Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {cart.map(product => (
              <li key={product.id} className="cart-item">
                <strong>{product.name}</strong> - Cantidad: {product.cant} - Precio: ${product.price.toFixed(2)} - Subtotal: ${(product.price * product.cant).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <h3>Precio Final: ${finalPrice}</h3>
          <Link to={"/formulario"} className="finalizar-butt">
            <button className="btn btn-secondary finalizar-butt">finalizar compra</button>
            </Link>
        </div>
      )}
    </div>
  );
}

export default CartDetail;
