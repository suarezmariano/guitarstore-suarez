import { Link } from 'react-router-dom';

import './NavBar.css';
import WidgetCart from '../WidgetCart/WidgetCart';

function NavBar() {
  return (
    <div className="container">
      <a href="/" className="logo">
        <span>Guitar</span>Store
      </a>

      <nav className="nav">
        <Link to={`/category/Electrica`}>Eléctricas</Link>
        <Link to={`/category/Acustica`}>Acústicas</Link>
        <Link to={`/favorites`}>Favoritos</Link>
        <Link to={`/orders`}>Mis Compras</Link>
        <Link to={`/cart`}>
          <WidgetCart />
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
