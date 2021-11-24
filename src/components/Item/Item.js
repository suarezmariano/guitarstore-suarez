import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ data }) => (
  <div className="items-container">
    <div class="ui card">
      <div class="image">
        <img src={data.img} alt="artículo" />
      </div>
      <div class="content">
        <div class="header">{data.brand + " " + data.model}</div>
        <div class="meta">
          <span class="date">{data.description}</span>
          <span class="date">, Año: {data.year}</span>
        </div>
        <div class="description">{data.price}</div>
        <div>
          <ItemCount stock="10" initial="0" />
        </div>
      </div>
    </div>
  </div>
);

export default Item;
