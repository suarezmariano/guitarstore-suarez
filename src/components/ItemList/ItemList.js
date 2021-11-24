import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/guitars"
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const items2 = Array.from(items);

  return (
    <div className="itemList-container">
      {items2.map((item) => {
        return <Item data={item} />;
      })}
    </div>
  );
}

export default ItemList;
