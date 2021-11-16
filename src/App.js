import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import strato1 from './assets/img/strato1.jpg';
import tele1 from './assets/img/tele1.jpg';
import lespaul1 from './assets/img/lespaul1.jpg';
import coronado from './assets/img/coronado.jpg';
import strato2 from './assets/img/strato2.jpg';
import lespaul2 from './assets/img/lespaul2.jpg';
import pensa from './assets/img/pensa.jpg';
import strato3 from './assets/img/strato3.jpg';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="ItemsSection">
        <ItemListContainer
        img={strato1}
        model="Fender Stratocaster"
        price="U$S 1950"
        description="Modelo Standard, año 1977" />
        <ItemListContainer 
        img={tele1}
        model="Fender Telecaster"
        price="U$S 2350"
        description="Tele Nashville, año 1962" />  
        <ItemListContainer 
        img={lespaul1}
        model="Gibson Les Paul"
        price="U$S 1799"
        description="Vintage Relic" />
        <ItemListContainer 
        img={coronado}
        model="Fender Coronado"
        price="U$S 4999"
        description="Color cherry Red" />
        <ItemListContainer 
        img={strato2}
        model="Fender Stratocaster Gold"
        price="U$S 1999"
        description="Replica 1957" />
        <ItemListContainer 
        img={lespaul2}
        model="Gibson Les Paul Custom"
        price="U$S 2579"
        description="Año 1988, original" />
        <ItemListContainer 
        img={pensa}
        model="Pensa Superstrat"
        price="U$S 1999"
        description="Año 1988, mint" />
        <ItemListContainer 
        img={strato3}
        model="Fender Stratocaster Custom Shop"
        price="U$S 8899"
        description="Color Blue Marine" />
      </div>
    </div>
  );
}

export default App;
