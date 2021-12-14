import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ItemCount.css';

function ItemCount({ data, stock, initial, addItem }) {
  const [quantity, setQuantity] = useState(0);

  const handlerCounterUp = () => {
    setQuantity(quantity + 1);
  };

  const handlerCounterDown = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="buttons-container">
      <div className="ui buttons ">
        <Link to={`/`}>
          <button className="ui animated button">
            <div className="visible content">Volver</div>
            <div className="hidden content">
              <i aria-hidden="true" className="arrow left icon"></i>
            </div>
          </button>
        </Link>

        <button className="ui button" onClick={handlerCounterDown}>
          {' '}
          -{' '}
        </button>

        <div className="or" data-text={quantity}></div>
        <button className="ui button" onClick={handlerCounterUp}>
          {' '}
          +{' '}
        </button>

        {quantity > initial && quantity <= stock ? (
          <div>
            <button
              className="agregar ui button"
              onClick={() => addItem({ data, quantity })}
            >
              Agregar al Carrito
            </button>
          </div>
        ) : (
          <div>
            <button disabled className="agregar ui button">
              Agregar al Carrito
            </button>
          </div>
        )}
      </div>

      <div>
        <Link to={`/cart`}>
          <button className="ui vertical animated button">
            <div className="hidden content">Comprar</div>
            <div className="visible content">
              <i aria-hidden="true" className="shop icon"></i>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ItemCount;
