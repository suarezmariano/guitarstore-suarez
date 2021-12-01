import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ItemList.css";
import Item from "../Item/Item";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/guitars"
      )
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, 1500);
  }, []);

  const items2 = Array.from(items);

  return (
    <div className="itemList-container">
      {items2.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
