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

    ifPlaying = (players = [], player_id) => {
        let found = players.find(player => player.id === player_id)
        console.log(found)
        return found;
    }

    renderPlayButton() {
        return (
            <button
                type="button"
                onClick={this.onPlay}
            >
                Play
            </button>
        );
    }

    renderNotPlayButton() {
        return (
            <button
                type="button"
                onClick={this.onNotPlay}
            >
                Leave Game
            </button>
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
                <p>{event.description}</p>
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
        
        return (
            <section>
                <h2>{event.title}</h2>
                <p>{event.sport}</p>
                <p>{currentDate}</p>
                <p>{event.description}</p>
                <div className="event-buttons">
                    {this.ifPlaying(players, event.player_id)
                        ? this.renderNotPlayButton()
                        : this.renderPlayButton()}
                </div>
                <EventPlayers players={players} />
            </section>
        );
    }
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
}