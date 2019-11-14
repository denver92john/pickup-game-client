import React from 'react';
import './TabDataItem.css';

function TabDataItem(props) {
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

export default TabDataItem;