import "./NavBar.css";
import WidgetCart from "../WidgetCart/WidgetCart";

const NavBar = () => {
  return (
    <div className="container">
      <a href="#home" className="logo">
        <span>Guitar</span>Store
      </a>

      <nav className="nav">
        <a href="#instruments">Instrumentos</a>
        <a href="#services">Servicios</a>
        <a href="#about">Sobre Nosotros</a>
        <WidgetCart />
      </nav>
    </div>
  );
};

export default NavBar;
