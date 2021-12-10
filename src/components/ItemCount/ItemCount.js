import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './ItemCount.css';

function ItemCount({ stock, initial, data }) {
  const [counter, setCounter] = useState(0);
  const [onAdd, setOnAdd] = useState(0);

  const handlerCounterUp = () => {
    setCounter(counter + 1);
  };

  const handlerCounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const ItemCount = () => {
    if (counter <= stock) {
      setOnAdd(+initial + counter);
      setCounter(0);
    }
  };

  const ProcessOrder = () => {
    if (onAdd > 0) {
      alert('Compra procesada!');
    } else {
      alert('No agregaste productos al carrito!');
    }
  };

  return (
    <div className="buttons-container">
      <div className="ui buttons ">
        <button className="ui button" onClick={handlerCounterDown}>
          {' '}
          -{' '}
        </button>
        <div className="or" data-text={counter}></div>
        <button className="ui button" onClick={handlerCounterUp}>
          {' '}
          +{' '}
        </button>
        <button className="agregar ui button" onClick={ItemCount}>
          Agregar al Carrito
        </button>
      </div>
      <div className="ui horizontal statistic">
        <div className="label">Procesar comprar de:</div>
        <div className="value"> {onAdd}</div>
        <div className="label">unidades</div>
      </div>
      <div>
        <Link to={`/`}>
          <button className="ui animated button">
            <div className="visible content">Volver</div>
            <div className="hidden content">
              <i aria-hidden="true" className="arrow left icon"></i>
            </div>
          </button>
        </Link>
        <Link to={`/cart`}>
          <button
            onClick={ProcessOrder}
            className="ui vertical animated button"
          >
            <div className="hidden content">Comprar </div>
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
