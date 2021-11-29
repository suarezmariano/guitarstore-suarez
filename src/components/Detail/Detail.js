import "./Detail.css";

const Detail = ({ data }) => (
  <div class="ui items">
    <div class="item">
      <div class="image">
        <img src={data.img} alt="artículo" />
      </div>
      <div class="content">
        <div class="header">{data.brand + " " + data.model}</div>
        <div class="meta">{data.year}</div>
        <div class="meta">{data.description}</div>
        <div class="description">{data.price}</div>
      </div>
    </div>
  </div>
);

export default Detail;
