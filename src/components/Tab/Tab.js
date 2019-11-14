import React from 'react';
import './Tab.css';

function Tab(props) {
    return (
        <li className='tab-item'>
            {props.name}
        </li>
    );
}

export default Tab;