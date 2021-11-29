import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ItemDetail.css";
import Detail from "../Detail/Detail";

function ItemDetail() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(
      "https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/guitars"
    ).then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="ItemDetail-container">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Detail data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemDetail;
