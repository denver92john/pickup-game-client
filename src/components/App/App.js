import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import CreatePage from '../../routes/CreatePage/CreatePage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import DiscoverPage from '../../routes/DiscoverPage/DiscoverPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import Footer from '../Footer/Footer';
import config from '../../config';
import './App.css';
import EventsContext from '../../contexts/EventsContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      error: null,
    }
  }

  setEvents = events => {
    this.setState({
      events,
      error: null,
    })
  }

  handleAddEvent = event => {
    this.setState({
      events: [...this.state.events, event]
    })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/event`)
      .then(res => {
        if (!res) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setEvents)
      .catch(error => {
        console.error(error)
        this.setState({error})
      })
  }

  render() {
    const contextValue = {
      events: this.state.events,
      addEvent: this.handleAddEvent,
    }

    return (
      <div className="App">
        <Nav />
        <EventsContext.Provider value={contextValue}>
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
                component={DiscoverPage}
              />
              <Route 
                path={'/create'}
                component={CreatePage}
              />
            </Switch>
          </main>
        </EventsContext.Provider>

        <Footer />
      </div>
    );
  }
}

export default App;