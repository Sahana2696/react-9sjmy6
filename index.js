import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Details from './Details';
import { Provider } from 'react-redux';
import store from './store';
import View from './View';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-7">
          <BrowserRouter history>
            <div className="main" >
              <Link to='/View'>View </Link>
              <Link to='/Details'>Details</Link>
              <Link to='/About'>About</Link>
              <Link to='/Login'>Login</Link>
              <Link to='/Signup'>Signup</Link>
              <Link to='/Home'>Home</Link>
            </div>
            <hr />
            <div className="content">

              <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Signup' component={Signup} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Details' component={Details} />
                <Route exact path='/View' component={View}/>

              </Switch>

            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
