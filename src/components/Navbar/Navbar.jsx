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
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;