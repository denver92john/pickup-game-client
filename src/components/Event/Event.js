import React from 'react';
import './Event.css';

function Event(props) {
    const {id, title, type, players, max_players} = props;
    //console.log(typeof players);
    //console.log(players[0])
    return (
        <>
            <span>{title} </span>
            <span>{type} </span>
            <span>{max_players}</span>
        </>
    );
}

export default Event;