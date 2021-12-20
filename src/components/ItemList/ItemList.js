import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, doc, getDocs } from 'firebase/firestore';

import './ItemList.css';
import Item from '../Item/Item';
import { db } from '../../firebase/firebaseConfig';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'instruments'));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getItems();
  }, []);

  const items2 = Array.from(items);

  return (
    <div className="itemList-container">
      {items2.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/item/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
