import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="container">
            <a href="#home"><span>Guitar</span>Store</a>
            <a href="#instruments">Instrumentos</a>
            <a href="#services">Servicios</a>
            <a href="#about">Sobre Nosotros</a>
        </nav>
    );
};

export default NavBar;