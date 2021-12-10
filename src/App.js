import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CategoryList from './components/CategoryList/CategoryList';
import Services from './views/Services/Services';
import About from './views/About/About';
import Cart from './views/Cart/Cart';
import Footer from './components/Footer/Fotter';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/item/:id" element={<ItemDetail />} />
            <Route exact path="/category/:id" element={<CategoryList />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
