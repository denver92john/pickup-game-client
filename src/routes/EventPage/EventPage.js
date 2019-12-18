import React, {Component} from 'react';
import moment from 'moment';
import EventContext from '../../contexts/EventContext';
import EventApiService from '../../services/event-api-service';
import {Hero, Button, Section} from '../../components/Utils/Utils';
//import {checkPlayer} from '../../event-helper';
import './EventPage.css';

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
        const newPlay = {
            max_players: event.max_players,
            number_of_players: players.length
        }
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
        return found;
    }

    renderPlayButton() {
        return (
            <Button
                type="button"
                onClick={this.onPlay}
            >
                Play
            </Button>
        );
    }

    renderNotPlayButton() {
        return (
            <Button
                type="button"
                onClick={this.onNotPlay}
            >
                Leave Game
            </Button>
        );
    }

    renderEvent() {
        const {event, players} = this.context;
        return <>
            <Hero>
                <h1 className="hero-title">{event.title}</h1>
                <p className="hero-text">{event.description}</p>
            </Hero>
            <div className="event-data">
                <EventTable event={event} />
            </div>
            <div className="event-buttons">
                {this.ifPlaying(players, event.player_id)
                    ? this.renderNotPlayButton()
                    : this.renderPlayButton()}
            </div>
            <EventPlayers players={players} />
        </>
    }

    render() {
        const {error, event} = this.context;
        let content;
        if(error) {
            content = <p>There was an error</p>
        } else if(!event.id) {
            content = <p>Loading...</p>
        } else {
            content = this.renderEvent()
        }
        
        return (
            <section>
                {content}
            </section>
        );
    }
}

function EventTable(event) {
    const {datetime, host, max_players, number_of_players, sport} = event.event
    console.log(datetime)
    let dateAndTime = moment(datetime).format('ddd, MM/DD/YYYY @ h:mm A');

    return(
        <table className="event-table">
            <caption>Additional info about the event</caption>
            <tbody>
                <tr>
                    <th scope="row">Sport</th>
                    <td>{sport}</td>
                </tr>
                <tr>
                    <th scope="row">Date and Time</th>
                    <td>{dateAndTime}</td>
                </tr>
                <tr>
                    <th scope="row">Host</th>
                    <td>{host.username}</td>
                </tr>
                <tr>
                    <th scope="row">Number of Players</th>
                    <td>{number_of_players}</td>
                </tr>
                <tr>
                    <th scope="row">Max Number of Players</th>
                    <td>{max_players}</td>
                </tr>
            </tbody>
        </table>
    );
}

function EventPlayers({players = []}) {
    return (
        <Section className="section-event-page">
            <header className="section-heading">
                <h2>Players</h2>
            </header>
            <ul className="event-players">
                {players.map(player =>
                    <li key={player.id}>
                        <p>{player.username}</p>
                    </li>
                )}
            </ul>
        </Section>
        
    );
}