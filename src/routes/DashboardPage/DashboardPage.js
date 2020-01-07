import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import UserApiService from '../../services/user-api-service';
import {Hero} from '../../components/Utils/Utils';
import UserData from '../../components/UserData/UserData';

class DashboardPage extends Component {
    static contextType = UserContext;

    componentDidMount() {
        this.context.clearError()
        UserApiService.getUser()
            .then(user => {
                this.context.setUser(user)
                UserApiService.getUserEvents(user.id)
                    .then(this.context.setEvents)
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    handleUserEvents = ev => {
        ev.preventDefault()
        this.context.clearError()
        this.context.clearEvents()
        const user_id = this.context.user.id;
        UserApiService.getUserEvents(user_id)
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    handleHostedEvents = ev => {
        ev.preventDefault()
        this.context.clearError()
        this.context.clearEvents()
        const user_id = this.context.user.id;
        UserApiService.getUserHostedEvents(user_id)
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    renderDash() {
        const {user, events} = this.context
        return (
            <>
                <Hero>
                    <h1 className="hero-title">User Dashboard</h1>
                    <h2 className="hero-title">{user.username}</h2>
                    <h3 className="hero-title">{user.first_name} {user.last_name}</h3>
                </Hero>
                <UserData 
                    events={events}
                    onUserEvents={this.handleUserEvents}
                    onHostedEvents={this.handleHostedEvents}
                />
            </>
        );
    }

    render() {
        const {error} = this.context
        return (
            <div>
                {error
                    ? <p>There was an error, try again</p>
                    : this.renderDash()}
            </div>
        );
    }
}

export default DashboardPage;