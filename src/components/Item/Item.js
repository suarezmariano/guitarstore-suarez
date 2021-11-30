import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ data }) => (
  <div className="items-container">
    <div className="ui card">
      <div className="image">
        <img src={data.img} alt="artículo" />
      </div>
      <div className="content">
        <div className="header">{data.brand + " " + data.model}</div>
        <div className="description">{data.price}</div>
        <div>
          <ItemCount stock="10" initial="0" />
        </div>
      </div>
    </div>
  </div>
);

export default Item;
