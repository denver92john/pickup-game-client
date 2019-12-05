import React, {Component} from 'react';
import EventsContext from '../../contexts/EventsContext';
import EventApiService from '../../services/event-api-service';
import Event from '../Event/Event';
import './Events.css';

class Events extends Component {
    static contextType = EventsContext;

    componentDidMount() {
        this.context.clearError()
        EventApiService.getEvents()
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    renderEvents() {
        const {events = []} = this.context;
        return (
            <ul className='events-list'>
                {events.map(event =>
                    <Event 
                        key={event.id}
                        {...event}
                    />
                )}
            </ul>
        );
    }

    render() {
        const {error} = this.context;
        return (
            <div className='events'>
                {error
                    ? <p>There was an error</p>
                    : this.renderEvents()}
            </div>
        );
    }
}

export default Events;