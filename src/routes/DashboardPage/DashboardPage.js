import React, {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserData from '../../components/UserData/UserData';
import STORE from '../../dummy_store';

class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>User Dashboard</h1>
                </Hero>
                <UserProfile user={STORE.users[0]} />
                <UserData games={STORE.games} />
            </div>
        );
    }
}

export default DashboardPage;