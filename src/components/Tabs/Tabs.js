import React, {Component} from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';

class Tabs extends Component {
    render() {
        return (
            <ul className='tabindex-list'>
                <Tab name='My Games' />
                <Tab name='Hosted Events' />
            </ul>
        );
    }
}

export default Tabs;