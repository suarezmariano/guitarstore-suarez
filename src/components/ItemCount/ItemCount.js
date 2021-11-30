import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial }) {
  const [counter, setCounter] = useState(0);
  const [counterToAdd, setCounterToAdd] = useState(0);

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
      setCounterToAdd(+initial + counter);
      setCounter(0);
    }
  };

  return (
    <div className="buttons-container">
      <div className="ui buttons">
        <button className="ui button" onClick={handlerCounterDown}>
          {" "}
          -{" "}
        </button>
        <div className="or" data-text={counter}></div>
        <button className="ui button" onClick={handlerCounterUp}>
          {" "}
          +{" "}
        </button>
        <button className="agregar ui button" onClick={ItemCount}>
          Agregar al Carrito
        </button>
      </div>
      <div className="ui horizontal statistic">
        <div className="label">Carrito</div>
        <div className="value">{counterToAdd}</div>
      </div>
    </div>
  );
}

export default ItemCount;
