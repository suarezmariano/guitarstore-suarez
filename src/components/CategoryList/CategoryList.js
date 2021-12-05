import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import "./CategoryList.css";
import Item from "../Item/Item";

function CategoryList() {
  const type = useParams();
  const typeID = type.id;

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `https://my-json-server.typicode.com/suarezmariano/guitarstoreapi/${typeID}`
      )
        .then((response) => response.json())
        .then((json) => setItems(json));
    }, 1500);
  }, [typeID]);

  console.log(type);
  console.log(items);

  const items2 = Array.from(items);

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
