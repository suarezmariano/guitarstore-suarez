import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import './Orders.css';
import MessageSearchOrder from '../../components/MessageSearchOrder/MessageSearchOrder';

const initialState = {
  name: '',
};

function Orders() {
  const [order, setOrder] = useState(initialState);
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const getData = async () => {
      const docRef = doc(db, 'orders', order.name);
      const docSnap = await getDoc(docRef);

      setData(docSnap.data());
    };
    getData();
  };

  return (
    <div className=".orders">
      <h1>Ingresá tu número de orden</h1>
      <div className="ui container">
        <div className="ui segment">
          <form class="ui form" onSubmit={onSubmitHandler}>
            <div class="field">
              <input
                name="name"
                placeholder="Número de Orden"
                value={order.name}
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" class="ui button">
              Buscar
            </button>
          </form>
        </div>

        <div>
          <MessageSearchOrder msg={data} />
        </div>
      </div>
    </div>
  );
}
export default Orders;
