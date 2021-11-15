import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="ItemsSection">
        <ItemListContainer
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0118010712_gtr_frt_001_rr.jpg"
        model="Fender Stratocaster 0001"
        price="U$S 1950"
        description="Modelo Standard, año 1977" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113942750_fen_ins_frt_1_rr.jpg"
        model="Fender Telecaster"
        price="U$S 2350"
        description="Tele Nashville, año 1962" />  
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0149813372_gtr_frt_001_rr.jpg"
        model="Fender Jaguar"
        price="U$S 1799"
        description="Vintage Jaguar, relic" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0143021700_gtr_frt_001_rl.jpg"
        model="Fender Jaguar"
        price="U$S 4999"
        description="Kurt Cobain Signature" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0378553505_sqr_ins_frt_1_rr.jpg"
        model="Fender Precision"
        price="U$S 1999"
        description="Bajo Electrico" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0972013206_gtr_frt_001_rr.jpg"
        model="Fender Acustasonic"
        price="U$S 2579"
        description="Acústica y Eléctrica" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0960294221_gtr_frt_001_rr.jpg"
        model="Fender Acoustic"
        price="U$S 1999"
        description="Acústica de Concierto" />
        <ItemListContainer 
        img="https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0149783300_gtr_frt_001_rr.jpg"
        model="Fender Mustang"
        price="U$S 899"
        description="Guitarra asequible y confortable" />
      </div>
      
    </div>
  );
}

export default App;
