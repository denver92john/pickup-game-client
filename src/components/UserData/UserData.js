import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Events from '../Events/Events';
import 'react-tabs/style/react-tabs.css';
import './UserData.css';

class UserData extends Component {

    render() {
        return (
            <section className="user-data">
                <Tabs>
                    <TabList>
                        <Tab onClick={this.props.onUserEvents}>My Events</Tab>
                        <Tab onClick={this.props.onHostedEvents}>Hosted Events</Tab>
                    </TabList>
                    <TabPanel>
                        <Events events={this.props.events}/>
                    </TabPanel>
                    <TabPanel>
                        <Events events={this.props.events}/>
                    </TabPanel>
                </Tabs>
            </section>
        );
    }
}

export default UserData;