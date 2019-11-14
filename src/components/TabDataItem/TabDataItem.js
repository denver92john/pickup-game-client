import React from 'react';
import './TabDataItem.css';

function TabDataItem(props) {
    const game = props.games[0]
    return (
        <li className='tabdata-item'>
            <span>{game.title} </span>
            <span>{game.type} </span>
            <span>{game.players.length}/{game.max_players}</span>
        </li>
    );
}

export default TabDataItem;