import "./ItemCount.css";

const ItemCount = () => (
  <div className="buttons-container">
    <div class="ui buttons">
      <button class="ui negative button"> - </button>
      <div class="or" data-text="1"></div>
      <button class="ui positive button"> + </button>
      <button class="agregar ui button">Agregar al Carrito</button>
    </div>
  </div>
);

export default ItemCount;
