import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';

import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext/CartContext';

function Detail({ data }) {
  const { addFavs, addItem } = useContext(CartContext);

  return (
    <div className="ui datas">
      <div className="ui grid">
        <div className="four wide column">
          <img src={data.img} alt="artículo" className="ui image" />
        </div>
        <div className="nine wide column">
          <div className="content">
            <h1 className="ui header">Detalle de Producto</h1>
            <h2 className="ui header">{data.brand + ' ' + data.model}</h2>
            <h3 className="ui header">Año {data.year}</h3>
            <div className="meta">{data.description}</div>
            <Link to={`/favorites`} onClick={() => addFavs(data.id)}>
              Agregar a Favoritos
            </Link>
            <h3 className="ui header">u$s {data.price}</h3>
            <ItemCount data={data} stock="10" initial="0" addItem={addItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
