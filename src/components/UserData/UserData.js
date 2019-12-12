import React, {Component} from 'react';
import Tabs from '../Tabs/Tabs';
import Events from '../Events/Events';
import './UserData.css';

class UserData extends Component {
    render() {
        return (
            <section>
                <Tabs />
                <Events events={this.props.events}/>
                <button type="button" onClick={this.props.onUserEvents}>User Games</button>
                <button type="button" onClick={this.props.onHostedEvents}>Hosted Games</button>
            </section>
        );
    }
}

export default UserData;