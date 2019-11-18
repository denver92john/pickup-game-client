import React, {Component} from 'react';
import Tabs from '../Tabs/Tabs';
import Events from '../Events/Events';
import './UserData.css';

/*function UserData(props) {
    return (
        <section>
            {props.children}
        </section>
    );
}*/

class UserData extends Component {
    render() {
        return (
            <section>
                <Tabs />
                <Events games={this.props.games} />
            </section>
        );
    }
}

export default UserData;