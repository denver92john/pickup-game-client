import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import AuthApiService from '../../services/auth-api-service';
import {Hero} from '../../components/Utils/Utils';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserData from '../../components/UserData/UserData';

class DashboardPage extends Component {
    static contextType = UserContext;

    componentDidMount() {
        this.context.clearError()
        AuthApiService.getUser()
            .then(this.context.setUser)
            .catch(this.context.setError)
    }

    render() {
        return (
            <div>
                <Hero>
                    <h1>User Dashboard</h1>
                </Hero>
                <UserProfile user={this.context.user} />
                <UserData user={this.context.user} />
            </div>
        );
    }
}

export default DashboardPage;