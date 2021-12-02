import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import "./CategoryList.css";
import Item from "../Item/Item";

function CategoryList() {
  let type = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/instruments"
      )
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, 1500);
  }, []);

  const items2 = items.filter(function (array) {
    return array.type === type;
  });

  console.log(type);
  console.log(items);
  console.log(items2);

  return (
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
  );
}

export default CategoryList;
