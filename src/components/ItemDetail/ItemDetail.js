import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';

import './ItemDetail.css';
import Detail from '../Detail/Detail';
import { db } from '../../firebase/firebaseConfig';

function ItemDetail() {
  let id = useParams();
  let itemID = id.id;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const docRef = doc(db, 'instruments', itemID);
      const docSnap = await getDoc(docRef);

      setItems(docSnap.data());
    };
    getItems();
  }, [itemID]);

  return (
    <div className="itemDetail-container">
      <Detail data={items} />
    </div>
  );
}
export default ItemDetail;
