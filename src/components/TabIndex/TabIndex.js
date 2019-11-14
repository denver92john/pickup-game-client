import React, {Component} from 'react';
import Tab from '../Tab/Tab';
import './TabIndex.css';

class TabIndex extends Component {
    render() {
        return (
            <ul className='tabindex-list'>
                <Tab name='My Games' />
                <Tab name='Hosted Events' />
            </ul>
        );
    }
}

export default TabIndex;