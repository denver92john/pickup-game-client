import React, {Component} from 'react';
import Event from '../Event/Event';
import './Events.css';

class Events extends Component {
    render() {
        const {games} = this.props;
        return (
            <div className='events'>
                <ul className='events-list'>
                    {games.map(game => (
                        <li key={game.game_id} className='event-item'>
                            <Event 
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

export default Events;