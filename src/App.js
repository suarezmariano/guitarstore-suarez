import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="ItemsSection">
        <ItemListContainer
        img={'/assets/img/strato1.jpg'}
        model="Fender Stratocaster"
        price="U$S 1950"
        description="Modelo Standard, año 1977" />
        <ItemListContainer 
        img={'/assets/img/tele1.jpg'}
        model="Fender Telecaster"
        price="U$S 2350"
        description="Tele Nashville, año 1962" />  
        <ItemListContainer 
        img={'/assets/img/lespaul1.jpg'}
        model="Gibson Les Paul"
        price="U$S 1799"
        description="Vintage Relic" />
        <ItemListContainer 
        img={'/assets/img/coronado.jpg'}
        model="Fender Coronado"
        price="U$S 4999"
        description="Color cherry Red" />
        <ItemListContainer 
        img={'/assets/img/strato2.jpg'}
        model="Fender Stratocaster Gold"
        price="U$S 1999"
        description="Replica 1957" />
        <ItemListContainer 
        img={'/assets/img/lespaul2.jpg'}
        model="Gibson Les Paul Custom"
        price="U$S 2579"
        description="Año 1988, original" />
        <ItemListContainer 
        img={'/assets/img/pensa.jpg'}
        model="Pensa Superstrat"
        price="U$S 1999"
        description="Año 1988, mint" />
        <ItemListContainer 
        img={'/assets/img/strato3.jpg'}
        model="Fender Stratocaster Custom Shop"
        price="U$S 8899"
        description="Color Blue Marine" />
      </div>
    </div>
  );
}

export default App;
