import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import TokenService from '../../services/token-service';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import CreatePage from '../../routes/CreatePage/CreatePage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import DiscoverPage from '../../routes/DiscoverPage/DiscoverPage';
import EventPage from '../../routes/EventPage/EventPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import Footer from '../Footer/Footer';
//import config from '../../config';
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

  /*componentDidMount() {
    console.log('componentDidMount ran')
    if(TokenService.hasAuthToken()) {
      this.setState({loggedIn: true})
    } else {
      this.setState({loggedIn: false})
    }
  }*/

  setLoggedIn = loggedIn => {
    //console.log(loggedIn)
    this.setState({loggedIn: loggedIn})
  }

  render() {
    console.log('render in app ran')
    console.log(this.state.loggedIn)
    return (
        <div className="App">
          <header>
            <Nav />
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