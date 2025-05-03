import { Link } from "react-router";
import './CartWidget.css';
import { useAppContext } from "../../../context/context";


function CartWidget() {
  const { cart } = useAppContext();
  // Initialize cart to an empty array if it's undefined.
  const safeCart = cart || [];

  const totalQuantity = safeCart.reduce((total, prod) => total + prod.cant, 0);

  return (
    <Link to="/carrito" className="cart-widget">
      <span className="cart-icon">🛒</span>
      {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
    </Link>
  );
}

export default CartWidget;