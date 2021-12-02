import { Link } from "react-router-dom";

import "./NavBar.css";
import WidgetCart from "../WidgetCart/WidgetCart";

function NavBar() {
  return (
    <div className="container">
      <a href="/" className="logo">
        <span>Guitar</span>Store
      </a>

      <nav className="nav">
        <Link to={`/category/:Electrica`}>Eléctricas</Link>
        <Link to={`/category/:Acustica`}>Acústicas</Link>
        <a href="#services">Servicios</a>
        <a href="#about">Sobre Nosotros</a>
        <WidgetCart />
      </nav>
    </div>
  );
}

export default NavBar;
