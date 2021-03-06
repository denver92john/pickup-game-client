import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import CreatePage from '../../routes/CreatePage/CreatePage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import DiscoverPage from '../../routes/DiscoverPage/DiscoverPage';
import EventPage from '../../routes/EventPage/EventPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import Footer from '../Footer/Footer';
import './App.css';


class App extends Component {
  state = {
    hasError: false,
    loggedIn: false
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return {hasError: true}
  }

  setLoggedIn = loggedIn => {
    this.setState({loggedIn: loggedIn})
  }

  render() {
    return (
        <div className="App">
          <header className="App_header">
            <Nav onLogin={this.setLoggedIn} loggedIn={this.state.loggedIn} />
          </header>
          <main className="App_main">
            {this.state.hasError && <p>There was an error!</p>}
            <Switch>
              <Route 
                exact
                path={'/'}
                component={LandingPage}
              />
              <PublicOnlyRoute 
                path={'/signup'}
                component={SignupPage}
              />
              <PublicOnlyRoute
                path={'/login'}
                onLogin={this.setLoggedIn}
                component={LoginPage}
              />
              <PrivateRoute 
                path={'/dashboard'}
                component={DashboardPage}
              />
              <PrivateRoute 
                path={'/event/:event_id'}
                component={EventPage}
              />
              <PrivateRoute 
                path={'/discover'}
                component={DiscoverPage}
              />
              <PrivateRoute 
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