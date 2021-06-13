import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Route exact path="/" component={Menu} />
        <Route path="/cart" component={Cart} />
      </Router>
    </CartProvider>
  );
}

export default App;
