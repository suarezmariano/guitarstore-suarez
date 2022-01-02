import './App.css';

import Router from './router/Router';
import { CartProvider } from './context/CartContext/CartContext';

function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}

export default App;
