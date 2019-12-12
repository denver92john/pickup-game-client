import React, {Component} from 'react';
import EventsContext from '../../contexts/EventsContext';
import EventsItem from '../EventsItem/EventsItem';
import './Events.css';

class Events extends Component {
    static contextType = EventsContext;

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
        //const {error} = this.context;
        return (
            <div className='events'>
                {/*error
                    ? <p>There was an error</p>
                    : this.renderEvents()*/}
                {this.renderEvents()}
            </div>
        );
    }
}

export default Events;