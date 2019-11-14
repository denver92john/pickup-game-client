import React, {Component} from 'react';
import TabDataItem from '../TabDataItem/TabDataItem';
import './TabData.css';

class TabData extends Component {
    render() {
        return (
            <div className='tabdata'>
                <ul className='tabdata-list'>
                    <TabDataItem games={this.props.games} />
                </ul>
            </div>
        );
    }
}

export default TabData;