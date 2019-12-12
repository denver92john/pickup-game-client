import React, {Component} from 'react';

const UserContext = React.createContext({
    user: {},
    events: [],
    error: null,
    setUser: () => {},
    setEvents: () => {},
    setError: () => {},
    clearEvents: () => {},
    clearError: () => {},
})

export default UserContext;

export class UserProvider extends Component {
    state = {
        user: {},
        events: [],
        error: null
    }

    setUser = user => {
        this.setState({user})
    }

    setEvents = events => {
        this.setState({events})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearEvents = () => {
        this.setState({events: []})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const contextValue = {
            user: this.state.user,
            events: this.state.events,
            error: this.state.error,
            setUser: this.setUser,
            setEvents: this.setEvents,
            setError: this.setError,
            clearEvents: this.clearEvents,
            clearError: this.clearError
        }
        return (
            <UserContext.Provider value={contextValue}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}