import React, {Component} from 'react';
import TabIndex from '../TabIndex/TabIndex';
import TabData from '../TabData/TabData';
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
                <TabIndex />
                <TabData games={this.props.games} />
            </section>
        );
    }
}

export default UserData;