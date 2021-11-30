import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import "./ItemDetail.css";
import Detail from "../Detail/Detail";

function ItemDetail() {
  let id = useParams();
  let itemID = id.id;

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(
      `https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/guitars/${itemID}`
    ).then((response) => setItems(response.data));
  }, [itemID]);

  const items2 = Array.from(items);
  console.log(id);
  console.log(id.id);
  console.log(itemID);
  return (
    <div className="itemDetail-container ">
      <h1>Detalle de Producto</h1>
      {items2.map((item) => {
        return <Detail item={item} />;
      })}
    </div>
  );
}
export default ItemDetail;
