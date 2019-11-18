import React, {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserData from '../../components/UserData/UserData';

class DashboardPage extends Component {
    render() {
        const {games, users} = this.props.store;
        const loggedInUser = users[0]
        return (
            <div>
                <Hero>
                    <h1>User Dashboard</h1>
                </Hero>
                <UserProfile user={loggedInUser} />
                <UserData user={loggedInUser} games={games} />
            </div>
        );
    }
}

export default DashboardPage;