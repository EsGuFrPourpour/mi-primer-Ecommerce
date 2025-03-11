import { useState } from 'react';
import './Navbar.css';
import CartWidget from '../Carrito/CartWidget';

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">logo</a>
      <div className="navbar-nav">
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      <CartWidget/>
  </div>
</nav>
  );
};

export default Navbar;