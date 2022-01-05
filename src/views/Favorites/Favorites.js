import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

import { CartContext } from '../../context/CartContext/CartContext';

function Favorites() {
  const { favs, removeFavs, clearFavs } = useContext(CartContext);

  return (
    <div className="ui container">
      <h1>Tus Favoritos:</h1>
      <div className="ui segment">
        {favs.map((item) => (
          <div className="ui segment" key={item.id}>
            <div id="item">
              <button
                className="ui negative small button"
                onClick={() => removeFavs(item.id)}
              >
                Eliminar
              </button>
              <img src={item.img} alt="artículo" className="ui tiny image" />
              <Link to={`/item/${item.id}`}>
                <h1>
                  {item.brand} {item.model}
                </h1>
                <h1>P.U. u$s{item.price}</h1>
              </Link>
            </div>
          </div>
        ))}

        {favs.length === 0 ? (
          <button
            disabled
            className="ui negative button"
            onClick={() => clearFavs()}
          >
            Vaciar Favoritos
          </button>
        ) : (
          <button className="ui negative button" onClick={() => clearFavs()}>
            Vaciar Favoritos
          </button>
        )}
      </div>
    </div>
  );
}

export default Favorites;
