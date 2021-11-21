import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ img, model, price, description }) => (
  <div className="items-container">
    <div class="ui card">
      <div class="image">
        <img src={img} alt="artículo" />
      </div>
      <div class="content">
        <div class="header">{model}</div>
        <div class="meta">
          <span class="date">{price}</span>
        </div>
        <div class="description">{description}</div>
        <div>
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </div>
  </div>
);

export default Item;
