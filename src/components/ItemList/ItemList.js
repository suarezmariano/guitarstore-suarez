import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = () => (
  <div className="itemList-container">
    <Item
      img={"/assets/img/strato1.jpg"}
      model="Fender Stratocaster"
      price="U$S 1950"
      description="Modelo Standard, año 1997"
    />
    <Item
      img={"/assets/img/tele1.jpg"}
      model="Fender Telecaster"
      price="U$S 2350"
      description="Tele Nashville, año 1962"
    />
    <Item
      img={"/assets/img/lespaul1.jpg"}
      model="Gibson Les Paul"
      price="U$S 1799"
      description="Vintage Relic"
    />
    <Item
      img={"/assets/img/coronado.jpg"}
      model="Fender Coronado"
      price="U$S 4999"
      description="Color Cherry Red"
    />
    <Item
      img={"/assets/img/strato2.jpg"}
      model="Fender Stratocaster Gold"
      price="U$S 1999"
      description="Replica 1957"
    />
    <Item
      img={"/assets/img/lespaul2.jpg"}
      model="Gibson Les Paul Custom"
      price="U$S 2579"
      description="Año 1988, estado original"
    />
    <Item
      img={"/assets/img/pensa.jpg"}
      model="Pensa Superstrat"
      price="U$S 1999"
      description="Año 1988, estado Mint"
    />
    <Item
      img={"/assets/img/strato3.jpg"}
      model="Fender Stratocaster Custom Shop"
      price="U$S 8899"
      description="Color Blue Marine"
    />
  </div>
);

export default ItemList;
