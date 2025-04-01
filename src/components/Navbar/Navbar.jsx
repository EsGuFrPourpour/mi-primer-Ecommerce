import './Navbar.css';
import { Link } from "react-router";
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="linkTo" to="/">
          <h1>logo</h1>
        </Link>
          <Link className="linkTo" to="/categoria/electronica">
          <li>Electronica</li>
        </Link>
        <Link className="linkTo" to="/categoria/ropa">
          <li>Ropa</li>
        </Link>
        <Link className="linkTo" to="/categoria/muebles">
          <li>Muebles</li>
        </Link>
        {/*<div className="navbar-nav">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>*/}
        <Link to="/carrito">
        <CartWidget/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;