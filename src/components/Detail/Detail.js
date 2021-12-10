import "./Detail.css";
import ItemCount from "../ItemCount/ItemCount";

const Detail = ({ data }) => (
  <div className="ui datas">
    <div className="ui grid">
      <div className="four wide column">
        <img src={data.img} alt="artículo" className="ui image" />
      </div>
      <div className="nine wide column">
        <div className="content">
          <h1 className="ui header">Detalle de Producto</h1>
          <h2 className="ui header">{data.brand + " " + data.model}</h2>
          <h3 className="ui header">Año {data.year}</h3>
          <div className="meta">{data.description}</div>
          <h3 className="ui header">{data.price}</h3>
          <ItemCount stock="10" initial="0" />
        </div>
      </div>
    </div>
  </div>
);

export default Detail;
