import React from 'react';
import './Event.css';

function Event(props) {
    const {id, title, type, players, max_players} = props;
    return (
        <div className='event-item'>
            <h4 className='event-item-title'>
                {title}
            </h4>
            <span>{type} </span>
            <span>Number of players: {players.length}/</span>
            <span>{max_players}</span>
        </div>
    );
}

export default Event;