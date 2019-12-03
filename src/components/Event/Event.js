import React from 'react';
//import moment from 'moment';
import './Event.css';

function Event(props) {
    return (
        <li className="event-item">
            <h4 className="event-item-title">{props.title}</h4>
            <p>{props.sport}</p>
            <p>When: {props.datetime}</p>
            <p>Number of players: {props.number_of_players}/{props.max_players}</p>
            <p>{props.description}</p>
        </li>
    );
}

export default Event;
// BookmarkItem component in bookmarks-app for ref
/*
        <div className='event-item'>
            <h4 className='event-item-title'>
                {title}
            </h4>
            <span>{type} </span>
            <span>Number of players: {players.length}/</span>
            <span>{max_players}</span>
        </div>
*/