import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import CreatePage from '../../routes/CreatePage/CreatePage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import DiscoveryPage from '../../routes/DiscoverPage/DiscoverPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="App_main">
          <Switch>
            <Route 
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              path={'/signup'}
              component={SignupPage}
            />
            <Route 
              path={'/login'}
              component={LoginPage}
            />
            <Route 
              path={'/dashboard'}
              component={DashboardPage}
            />
            <Route 
              path={'/discover'}
              component={DiscoveryPage}
            />
            <Route 
              path={'/create'}
              component={CreatePage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;