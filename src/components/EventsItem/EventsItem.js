import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

export default class EventsItem extends Component {
    render() {
        const {event} = this.props;
        let datetime = moment(event.datetime).format('MMM ddd DD YYYY');
        return (
            <li className="event-item">
                <Link to={`/event/${event.id}`} className="events-item">
                    <header>
                        <h4>{event.title}</h4>
                        <p>{event.sport}</p>
                    </header>
                    <footer>
                        <p>When: {datetime}</p>
                    </footer>
                </Link>
            </li>
            
        );
    }
}