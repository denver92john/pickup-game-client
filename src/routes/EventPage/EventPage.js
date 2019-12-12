import React, {Component} from 'react';
import moment from 'moment';
import EventContext from '../../contexts/EventContext';
import EventApiService from '../../services/event-api-service';
//import {checkPlayer} from '../../event-helper';
//import './Event.css';

export default class EventPage extends Component {
    static defaultProps = {
        match: {params: {}}
    }

    static contextType = EventContext;

    componentDidMount() {
        const {event_id} = this.props.match.params;
        this.context.clearError()
        EventApiService.getEvent(event_id)
            .then(this.context.setEvent)
            .catch(this.context.setError)
        EventApiService.getPlayers(event_id)
            .then(this.context.setPlayers)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearEvent()
    }

    onPlay = ev => {
        ev.preventDefault()
        console.log('onPlay ran')
        this.context.clearError()
        const {event, players} = this.context;
        //console.log(event)
        const newPlay = {
            max_players: event.max_players,
            number_of_players: players.length
        }
        console.log(newPlay)
        EventApiService.play(newPlay, event.id)
            .then(res => {
                EventApiService.getPlayers(event.id)
                    .then(resData => {
                        this.context.setPlayers(resData)
                    })
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    onNotPlay = ev => {
        ev.preventDefault()
        console.log('onNotPlay ran')
        this.context.clearError()
        const {event} = this.context;
        EventApiService.deletePlay(event.id)
            .then(() => {
                EventApiService.getPlayers(event.id)
                    .then(resData => {
                        this.context.setPlayers(resData)
                    })
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    renderPlayButton() {
        return (
            <div className="event-buttons">
                <button
                    type="button"
                    onClick={this.onPlay}
                >
                    Play
                </button>
            </div>
        );
    }

    renderNotPlayButton() {
        return (
            <div className="event-buttons">
                <button
                    type="button"
                    onClick={this.onNotPlay}
                >
                    Leave Game
                </button>
            </div>
        );
    }

    /*renderEvent = () => {
        const {event, players} = this.context;
        let currentDate = moment(event.datetime).format('MMM ddd DD YYYY');
        console.log(players)
        return (
            <section>
                <h2>{event.title}</h2>
                <p>{event.sport}</p>
                <p>{currentDate}</p>
                <ul>
                    {players.map(player =>
                        <li key={player.id}>
                            {player.username}
                        </li>
                    )}
                </ul>
            </section>
        );
    }*/

    render() {
        const {event, players} = this.context;
        let currentDate = moment(event.datetime).format('MMM ddd DD YYYY');
        const playing = players.map(player =>
            <li key={player.id}>{player.username}</li>)
        
        return (
            <section>
                <h2>{event.title}</h2>
                <p>{event.sport}</p>
                <p>{currentDate}</p>
                <p>{event.description}</p>
                <div className="event-buttons">
                    <button
                        type="button"
                        onClick={this.onPlay}
                    >
                        Play
                    </button>
                    <button
                        type="button"
                        onClick={this.onNotPlay}
                    >
                        Leave Game
                    </button>
                </div>
                <ul>
                    {/*players.map(player =>
                        <li key={player.id}>
                            {player.username}
                        </li>
                    )*/}
                    {playing}
                </ul>
            </section>
        );
    }

    /*render() {
        const {id, datetime, description, max_players, number_of_players, sport, title} = this.props;
        let currentDate = moment(datetime).format('MMM ddd DD YYYY');
        return (
            <li className="event-item">
                <h4 className="event-item-title">{title}</h4>
                <p>{sport}</p>
                <p>When: {currentDate}</p>
                <p>Number of Players: {number_of_players}/{max_players}</p>
                <p>{description}</p>
                {EventApiService.checkPlay(id)
                    ? this.renderPlayButton()
                    : this.renderNotPlayButton()}
                <div className="event-buttons">
                <button
                    type="button"
                    onClick={this.onPlay}
                >
                    Play
                </button>
                <button
                    type="button"
                    onClick={this.onNotPlay}
                >
                    Leave Game
                </button>
                </div>
            </li>
        );
    }*/
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
}

function EventPlayers({players = []}) {
    return (
        <ul>
            {players.map(player =>
                <li key={player.id}>
                    <p>{player.username}</p>
                </li>
            )}
        </ul>
    );
}*/