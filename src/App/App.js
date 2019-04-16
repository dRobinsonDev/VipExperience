import React, { Component } from 'react';
import { Route, Switch  } from 'react-router-dom';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import AboutPage from '../pages/AboutPage/AboutPage';
import EventsPage from '../pages/EventsPage/EventsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import userService from '../utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      user: null,
      simpleCart: {},
      loc: null,
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
          <Route exact path='/' render={(props) =>
          <EventsPage  />
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
          <Route exact path='/Products' render={(props) => 
              <ShopPage />
          }/>
          <Route exact path="/Products" component={ShopPage} />
          <Route exact path="/Cart" render={ (props) => <ShopPage />} />
          <Route exact path="/Checkout" component={ShopPage} />
          <Route exact path='/About' render={() => 
             <AboutPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
