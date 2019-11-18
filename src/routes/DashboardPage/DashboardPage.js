import React, {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserData from '../../components/UserData/UserData';

class DashboardPage extends Component {
    render() {
        const {games, users} = this.props.store;
        return (
            <div>
                <Hero>
                    <h1>User Dashboard</h1>
                </Hero>
                <UserProfile user={users[0]} />
                <UserData games={games} />
            </div>
        );
    }
}

export default DashboardPage;