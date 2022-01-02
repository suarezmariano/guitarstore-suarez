import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { collection, where, getDocs } from 'firebase/firestore';

import './CategoryList.css';
import Item from '../Item/Item';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../Spinner/Spinner';

function CategoryList() {
  const id = useParams();
  const typeID = id.id;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(
        collection(db, 'instruments'),
        where('type', '==', typeID)
      );
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [typeID]);

  const items2 = items.filter(function (array) {
    return array.type === typeID;
  });

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="categoryList-container">
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
      )}
    </>
  );
}

export default CategoryList;
