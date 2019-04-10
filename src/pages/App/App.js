import React, { Component } from 'react';
import { Redirect, Route, Switch  } from 'react-router-dom';
import HeaderNavBar from '../../components/HeaderNavBar/HeaderNavBar';
import AccountPage from '../AccountPage/AccountPage';
import EventsPage from '../EventsPage/EventsPage';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
    window.setState = this.setState.bind(this);
  }

  getInitialState() {
    return {
      user: null,
      simpleCart: {},
      loc: null
    };
  }


  /*--- Callback Methods ---*/
  getUserLocation() {

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

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({user})
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <HeaderNavBar />
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
          <Route exact path='/account' render={() => 
         this.state.user ? 
            <AccountPage
            />
            : 
            <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
