import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import EventApiService from '../../services/event-api-service';
import EventsContext from '../../contexts/EventsContext';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import Nav from '../Nav/Nav';
import LandingPage from '../../routes/LandingPage/LandingPage';
import CreatePage from '../../routes/CreatePage/CreatePage';
import DashboardPage from '../../routes/DashboardPage/DashboardPage';
import DiscoverPage from '../../routes/DiscoverPage/DiscoverPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import Footer from '../Footer/Footer';
//import config from '../../config';
import './App.css';


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
    EventApiService.getEvents()
      .then(this.setEvents)
      .catch(error => {
        console.error(error)
        this.setState({error})
      })


    /*fetch(`${config.API_ENDPOINT}/event`)
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
      })*/
  }

  render() {
    const contextValue = {
      events: this.state.events,
      addEvent: this.handleAddEvent,
    }

    return (
      <EventsContext.Provider value={contextValue}>
        <div className="App">
          <Nav />
            <main className="App_main">
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
                  component={LoginPage}
                />
                <PrivateRoute 
                  path={'/dashboard'}
                  component={DashboardPage}
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
      </EventsContext.Provider>
    );
  }
}

export default App;