import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './EventsItem.css';

export default class EventsItem extends Component {
    render() {
        const {event} = this.props;
        let datetime = moment(event.datetime).format('ddd, MMM-DD-YYYY h:mm a');
        return (
            <li className="event-item">
                <Link to={`/event/${event.id}`} className="events-item">
                    <header className="event-item-header">
                        <h4 className="event-item-title">{event.title}</h4>
                        <p className="event-item-sport">{event.sport}</p>
                    </header>
                    <footer className="event-item-footer">
                        <p className="event-item-datetime">When: {datetime}</p>
                    </footer>
                </Link>
            </li>
            
        );
    }
}