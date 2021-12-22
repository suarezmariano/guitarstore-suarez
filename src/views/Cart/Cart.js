import React, { useContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import './Cart.css';

import { CartContext } from '../../context/CartContext/CartContext';
import { db } from '../../firebase/firebaseConfig';

import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';
import Spinner from '../../components/Spinner/Spinner';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

function Cart() {
  const { items, removeItem, clearItems } = useContext(CartContext);
  const [values, setValues] = useState(initialState);
  const [orderID, setOrderID] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'orders'), {
      values,
    });
    setOrderID(docRef);
    setTimeout(() => {
      setIsLoading(false);
      setValues(initialState);
    }, 1000);
  };

  return (
    <div className="ui container">
      <h1>Detalle de tu compra: </h1>
      <div className="ui segment">
        {items.map((item) => (
          <div className="ui segment" key={item.id}>
            <div id="item">
              {' '}
              <button
                className="ui negative small button"
                onClick={() => removeItem(item.id)}
              >
                Borrar Producto
              </button>
              <img src={item.img} alt="artículo" className="ui tiny image" />
              <h1>Cantidad:{item.quantity}</h1>
              <h1>
                {item.brand} {item.model}
              </h1>
              <h1>P.U. u$s{item.price}</h1>
              <h1>Total u$s{item.quantity * item.price}</h1>
            </div>
          </div>
        ))}
        <button className="ui negative button" onClick={() => clearItems()}>
          Vaciar Carrito
        </button>
      </div>

      <div className="ui segment">
        <form class="ui form" onSubmit={onSubmitHandler}>
          <div class="field">
            <input
              name="name"
              placeholder="Nombre y Apellido"
              value={values.name}
              onChange={onChangeHandler}
            />
          </div>

          <div class="field">
            <input
              name="phone"
              placeholder="Teléfono"
              value={values.phone}
              onChange={onChangeHandler}
            />
          </div>

          <div class="field">
            <input
              name="email"
              placeholder="Correo Electrónico"
              value={values.email}
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit" class="ui positive button">
            Comprar
          </button>
        </form>

        {isLoading ? (
          <Spinner />
        ) : (
          orderID.id && (
            <div>
              <MessageSuccess msg={orderID} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Cart;
