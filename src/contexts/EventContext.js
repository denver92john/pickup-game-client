import React, {Component} from 'react';

export const nullEvent = {
    datetime: null,
    description: null,
    host: {},
    id: null,
    max_players: null,
    number_of_players: null,
    sport: null,
    title: null
}

const EventContext = React.createContext({
    event: {},
    players: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setEvent: () => {},
    clearEvent: () => {},
    setPlayers: () => {},
    addPlayer: () => {},
})

export default EventContext;

export class EventProvider extends Component {
    state = {
        event: nullEvent,
        players: [],
        error: null
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setEvent = event => {
        this.setState({event})
    }

    setPlayers = players => {
        this.setState({players})
    }

    clearEvent = event => {
        this.setEvent(nullEvent)
        this.setPlayers([])
    }

    addPlayer = player => {
        this.setPlayers([
            ...this.state.players,
            player
        ])
    }

    render() {
        const contextValue = {
            event: this.state.event,
            players: this.state.players,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEvent: this.setEvent,
            clearEvent: this.clearEvent,
            setPlayers: this.setPlayers,
            addPlayer: this.addPlayer,
        }

        return (
            <EventContext.Provider value={contextValue}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}