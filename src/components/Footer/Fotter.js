import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="box-container">
        <div className="box">
          <p>
            Diseñado por Mariano Suarez - 2022 - Todos los derechos reservados.
          </p>
        </div>

        <div className="box">
          <a
            href="https://portfolio-marianosuarez.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/mariano-suarez-/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedn
          </a>
          <a
            href="https://github.com/suarezmariano"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:marianohectorsuarez@gmail.com">Enviame un Mensaje</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
