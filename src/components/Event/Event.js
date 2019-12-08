import React, {Component} from 'react';
import moment from 'moment';
import EventsContext from '../../contexts/EventsContext';
import EventApiService from '../../services/event-api-service';
import './Event.css';

class Event extends Component {
    static defaultProps = {}

    static contextType = EventsContext;

    onPlay = ev => {
        ev.preventDefault()
        console.log('onPlay ran')
        this.context.clearError()
        const event_id = this.props.id;
        EventApiService.play({event_id})
            .then(res => {
                EventApiService.getEvents()
                    .then(this.context.setEvents)
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    render() {
        const {datetime, description, max_players, number_of_players, sport, title} = this.props;
        let currentDate = moment(datetime).format('MMM ddd DD YYYY');
        return (
            <li className="event-item">
                <h4 className="event-item-title">{title}</h4>
                <p>{sport}</p>
                <p>When: {currentDate}</p>
                <p>Number of Players: {number_of_players}/{max_players}</p>
                <p>{description}</p>
                <div className="event-buttons">
                    <button
                        type="button"
                        onClick={this.onPlay}
                    >
                        Play
                    </button>
                </div>
            </li>
        );
    }
}

/*function Event(props) {
    //console.log(props.datetime)
    let currentDate = moment(props.datetime).format('MMM ddd DD YYYY');
    return (
        <li className="event-item">
            <h4 className="event-item-title">{props.title}</h4>
            <p>{props.sport}</p>
            <p>When: {currentDate}</p>
            <p>Number of players: {props.number_of_players}/{props.max_players}</p>
            <p>{props.description}</p>
            <div className="event-buttons">
                    <button
                        type="button"
                        onClick={props.onPlay}
                    >
                        Play
                    </button>
                </div>
        </li>
    );
}*/

export default Event;