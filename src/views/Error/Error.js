import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => (
  <div className=".error">
    <h1>Error!</h1>
    <p>La página a la que intentaste acceder no existe.</p>
    <Link to={`/`}>Retornar a la página principal</Link>
  </div>
);

export default Error;
