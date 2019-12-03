import React, {Component} from 'react';
import EventsContext from '../../contexts/EventsContext';
import Event from '../Event/Event';
import './Events.css';

class Events extends Component {
    static defaultProps = {
        events: [],
    }

    static contextType = EventsContext;

    render() {
        const {events} = this.context;
        return (
            <div className='events'>
                <ul className='events-list'>
                    {events.map(event =>
                        <Event 
                            key={event.id}
                            {...event}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default Events;