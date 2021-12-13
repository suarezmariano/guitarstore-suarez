import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import './ItemDetail.css';
import Detail from '../Detail/Detail';

function ItemDetail() {
  let id = useParams();
  let itemID = id.id;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios(
        `https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/instruments/${itemID}`
      ).then((response) => setItems(response.data));
    }, 1500);
  }, [itemID]);

  return (
    <div className="itemDetail-container">
      <Detail data={items} />
    </div>
  );
}
export default ItemDetail;
