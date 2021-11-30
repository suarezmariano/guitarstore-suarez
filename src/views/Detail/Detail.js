import "./Detail.css";

const Detail = ({ item }) => (
  <div class="ui datas">
    <div class="data" style={{ width: 900 }}>
      <div class="image">
        <img src={item.img} alt="artículo" />
      </div>
      <div class="content">
        <div class="header">{item.brand + " " + item.model}</div>
        <div class="meta">{item.year}</div>
        <div class="meta">{item.description}</div>
        <div class="description">{item.price}</div>
      </div>
    </div>
  </div>
);

export default Detail;
