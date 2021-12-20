import './Item.css';

const Item = ({ data }) => (
  <div className="items-container">
    <div className="ui card">
      <div className="image">
        <img src={data.img} alt="artículo" />
      </div>
      <div className="content">
        <div className="header">{data.brand + ' ' + data.model}</div>
        <div className="description">u$s {data.price}</div>
      </div>
    </div>
  </div>
);

export default Item;
