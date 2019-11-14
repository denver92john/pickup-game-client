import React, {Component} from 'react';
import TabDataItem from '../TabDataItem/TabDataItem';
import './TabData.css';

class TabData extends Component {
    render() {
        const {games} = this.props;
        return (
            <div className='tabdata'>
                <ul className='tabdata-list'>
                    {games.map(game => (
                        <li key={game.game_id} className='tabdata-item'>
                            <TabDataItem 
                                id={game.game_id}
                                title={game.title}
                                type={game.type}
                                players={game.players}
                                max_players={game.max_players}
                            />
                        </li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

export default TabData;