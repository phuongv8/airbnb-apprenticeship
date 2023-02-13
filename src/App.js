import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import data from './data.json';

import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';
import Login from './Pages/Login';
import AdminHome from './Pages/AdminHome';
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';

const App = () => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [total, setTotal] = useState(0);
  // const [admin, setAdmin] = useState('Log In');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = product => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
      product.quantityInCart += 1;
      setItemCount(itemCount + 1);
      setTotal(total + product.price);
    }
  };

  return (
    <BrowserRouter>
      <Header itemCount={itemCount} />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<Home products={products} />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetail addToCart={addToCart} products={products} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  itemCount={itemCount}
                  setItemCount={setItemCount}
                  total={total}
                  setTotal={setTotal}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout
                  total={total}
                  setCart={setCart}
                  setItemCount={setItemCount}
                  setTotal={setTotal}
                  cart={cart}
                  products={products}
                  setProducts={setProducts}
                />
              }
            />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/admin"
              element={
                isLoggedIn ? (
                  <AdminHome products={products} setProducts={setProducts} />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route
              path="/add"
              element={
                isLoggedIn ? (
                  <AddProduct products={products} setProducts={setProducts} />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
            <Route
              path="/edit"
              element={
                isLoggedIn ? (
                  <EditProduct products={products} setProducts={setProducts} />
                ) : (
                  <Login setIsLoggedIn={setIsLoggedIn} />
                )
              }
            />
          </Routes>
        </Container>
      </main>
    </BrowserRouter>
  );
};

export default App;
