import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
  email2: '',
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
      total,
      items,
    });
    setOrderID(docRef);
    setTimeout(() => {
      setIsLoading(false);
      setValues(initialState);
    }, 1000);
  };

  let total = 0;
  items.forEach((element) => {
    let subtotal = element.price * element.quantity;
    total += subtotal;
  });

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

        <h1>Total de la Compra: u$s {total}</h1>

        {items.length === 0 ? (
          <button
            disabled
            className="ui negative button"
            onClick={() => clearItems()}
          >
            Vaciar Carrito
          </button>
        ) : (
          <button className="ui negative button" onClick={() => clearItems()}>
            Vaciar Carrito
          </button>
        )}
      </div>

      <div className="ui segment">
        <form className="ui form" onSubmit={onSubmitHandler}>
          <div className="field">
            <input
              name="name"
              placeholder="Nombre y Apellido"
              value={values.name}
              onChange={onChangeHandler}
            />
          </div>

          <div className="field">
            <input
              name="phone"
              placeholder="Teléfono"
              value={values.phone}
              onChange={onChangeHandler}
            />
          </div>

          <div className="field">
            <input
              name="email"
              placeholder="Correo Electrónico"
              value={values.email}
              onChange={onChangeHandler}
            />
          </div>
          <div className="field">
            <input
              name="email2"
              placeholder="Confirmar Correo Electrónico"
              value={values.email2}
              onChange={onChangeHandler}
            />
          </div>

          {values.email === values.email2 ? (
            <button type="submit" className="ui positive button">
              Finalizar Compra
            </button>
          ) : (
            <button disabled type="submit" className="ui positive button">
              Finalizar Compra
            </button>
          )}
        </form>

        {isLoading ? (
          <Spinner />
        ) : (
          orderID.id && (
            <div>
              <MessageSuccess msg={orderID} />
              <Link to={`/`} onClick={() => clearItems()}>
                Retornar a la página principal
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Cart;
