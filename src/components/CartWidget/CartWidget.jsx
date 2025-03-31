import React from "react";
import './CartWidget.css';

function CartWidget({quantity}) {
  return (
    <div>
      🛒
      <p>{quantity}</p>
    </div>
  );
};

export default CartWidget;