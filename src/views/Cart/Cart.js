import React, { useContext } from 'react';
import './Cart.css';

import { CartContext } from '../../context/CartContext/CartContext';

function Cart() {
  const { items, removeItem, clearItems } = useContext(CartContext);

  return (
    <div className="ui container">
      <h1>Detalle de tu compra: </h1>

      {items.map((item) => (
        <div className="ui segment" key={item.id}>
          <div id="item">
            <img src={item.img} alt="artículo" className="ui tiny image" />

            <h1>Cantidad: {item.quantity}</h1>
            <h1>{item.brand}</h1>
            <h1>{item.model}</h1>
            <h1>u$s {item.price}</h1>
          </div>
          <button className="ui button" onClick={() => removeItem(item.id)}>
            Borrar Producto
          </button>
        </div>
      ))}
      <button className="ui button" onClick={() => clearItems()}>
        Vaciar Carrito
      </button>
      <div className="ui segment">
        <form class="ui form">
          <div class="field">
            <input name="name" placeholder="Nombre y Apellido" />
          </div>
          <div class="field">
            <input name="phone" placeholder="Teléfono" />
          </div>
          <div class="field">
            <input name="email" placeholder="Correo Electrónico" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>Acepto los terminos y condiciones</label>
            </div>
          </div>
          <button type="submit" class="ui button">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
