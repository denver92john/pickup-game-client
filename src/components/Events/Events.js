import React, {Component} from 'react';
import EventsItem from '../EventsItem/EventsItem';
import './Events.css';

class Events extends Component {
    renderEvents() {
        const events = this.props.events;
        return (
            <ul className='events-list'>
                {events.map(event =>
                    <EventsItem 
                        key={event.id}
                        event={event}
                    />
                )}
            </ul>
        );
    }

    render() {
        return (
            <>
                {this.renderEvents()}
            </>
        );
    }
}

export default Events;