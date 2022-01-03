import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../App.css';
import NavBar from '../components/NavBar/NavBar';
import Home from '../views/Home/Home';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import CategoryList from '../components/CategoryList/CategoryList';
import Orders from '../views/Orders/Orders';
import Error from '../views/Error/Error';
import Cart from '../views/Cart/Cart';
import Favorites from '../views/Favorites/Favorites';
import Footer from '../components/Footer/Fotter';

const Router = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/category/:id" element={<CategoryList />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Router;
