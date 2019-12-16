import React, {Component} from 'react';

const EventsContext = React.createContext({
    events: [],
    sports: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setEvents: () => {},
    addEvent: () => {},
});

export default EventsContext;

export class EventsProvider extends Component {
    state = {
        events: [],
        sports: [],
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }

    setEvents = events => {
        this.setState({events})
    }

    setSports = sports => {
        this.setState({sports})
    }

    addEvent = event => {
        this.setState({
            events: [...this.state.events, event]
        })
    }

    render() {
        const contextValue = {
            events: this.state.events,
            sports: this.state.sports,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEvents: this.setEvents,
            setSports: this.setSports,
            addEvent: this.addEvent,
        }
        return (
            <EventsContext.Provider value={contextValue}>
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}