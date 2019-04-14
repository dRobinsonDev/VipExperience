import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import AboutPage from '../Pages/AboutPage/AboutPage';
import EventsPage from '../Pages/EventsPage/EventsPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import Products from '../components/Shop/ProductList';
import ShopPage from '../Pages/ShopPage/ShopPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import Cart from '../components/Shop/Cart';
import Checkout from '../components/Shop/Checkout';
import userService from '../utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      user: null,
      simpleCart: {},
      loc: null
    };
  }

  handleCartUpdate = (cart) => {
    this.setState({ simpleCart: cart });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({user})
  }

  render() {
    return (
      <div>
        <HeaderNavBar 
        user={this.state.user}
        />
        <Switch>
          <Route exact path='/' render={() =>
          <EventsPage />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/Services' render={() => 
              <ShopPage />

          }/>
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path='/About' render={() => 
             <AboutPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
