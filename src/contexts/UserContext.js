import React, {Component} from 'react';

const UserContext = React.createContext({
    user: {},
    events: [],
    hosted: [],
    error: null,
    setUser: () => {},
    setEvents: () => {},
    setHosted: () => {},
    setError: () => {},
    clearEvents: () => {},
    clearHosted: () => {},
    clearError: () => {},
})

export default UserContext;

export class UserProvider extends Component {
    state = {
        user: {},
        events: [],
        hosted: [],
        error: null
    }

    setUser = user => {
        this.setState({user})
    }

    setEvents = events => {
        this.setState({events})
    }

    setHosted = hosted => {
        this.setState({hosted})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearEvents = () => {
        this.setState({events: []})
    }

    clearHosted = () => {
        this.setState({hosted: null})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const contextValue = {
            user: this.state.user,
            events: this.state.events,
            hosted: this.state.hosted,
            error: this.state.error,
            setUser: this.setUser,
            setEvents: this.setEvents,
            setHosted: this.setHosted,
            setError: this.setError,
            clearEvents: this.clearEvents,
            clearHosted: this.clearHosted,
            clearError: this.clearError
        }
        return (
            <UserContext.Provider value={contextValue}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}