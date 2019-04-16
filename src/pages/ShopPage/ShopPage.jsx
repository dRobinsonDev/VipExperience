import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Cart from '../../components/Shop/Cart';
import Checkout from '../../components/Shop/Checkout';
import Products from '../../components/Shop/ProductList';
import './ShopPage.css'

class ShopPage extends Component {
 
  render() {
    return (
      <div className="container">
        <br/>
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Checkout" component={Checkout} />
      </div>
    );
  }
}

export default ShopPage;