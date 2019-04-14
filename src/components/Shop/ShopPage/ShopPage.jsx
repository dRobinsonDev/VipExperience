import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Cart from '../../components/Shop/Cart';
import Checkout from '../../components/Shop/Checkout';
import Products from '../../components/Shop/ProductList';
import { isAuthenticated } from '../../repository';


class ShopPage extends Component {
  
  render() {
    const auth = isAuthenticated();
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">ShoppingCart</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/Products">Products</Link>
                  <Link className="nav-item nav-link" to="/Cart">Cart</Link>
                  { (auth) ? <Link className="nav-item nav-link" to="/checkout">Checkout</Link>: ''}
                </div>
              </div>
        
            </div>
          </nav>
          <div className="container">
            <br/>
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Checkout" component={Checkout} />
          </div>
        </div>
      </Router>
    );
  }
}

export default ShopPage;