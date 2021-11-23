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
      <div class="ui buttons">
        <button class="ui button" onClick={handlerCounterDown}>
          {" "}
          -{" "}
        </button>
        <div class="or" data-text={counter}></div>
        <button class="ui button" onClick={handlerCounterUp}>
          {" "}
          +{" "}
        </button>
        <button class="agregar ui button" onClick={ItemCount}>
          Agregar al Carrito
        </button>
      </div>
      <div class="ui horizontal statistic">
        <div class="label">Carrito</div>
        <div class="value">{counterToAdd}</div>
      </div>
    </div>
  );
}

export default ItemCount;
