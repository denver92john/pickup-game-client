import React, {Component} from 'react';

const EventsContext = React.createContext({
    events: [],
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

    addEvent = event => {
        this.setState({
            events: [...this.state.events, event]
        })
    }

    render() {
        const contextValue = {
            events: this.state.events,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEvents: this.setEvents,
            addEvent: this.addEvent,
        }
        return (
            <EventsContext.Provider value={contextValue}>
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}