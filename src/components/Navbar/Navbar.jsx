import './Navbar.css';
import CartWidget from '../Carrito/CartWidget';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1><a className="navbar-brand" href="#">logo</a></h1>
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