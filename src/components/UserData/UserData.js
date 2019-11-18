import React, {Component} from 'react';
import Tabs from '../Tabs/Tabs';
import Events from '../Events/Events';
import './UserData.css';

class UserData extends Component {
    findUserGames = (user_id, games=[]) => {
        let userGames = [];
        games.forEach(game => {
            game.players.forEach(player => {
                if(player.player_id === user_id) {
                    userGames.push(game)
                }
            })
        })
        return userGames;
    }

    render() {
        const {user, games} = this.props;
        const userGames = this.findUserGames(user.user_id, games);
        return (
            <section>
                <Tabs />
                <Events 
                    games={userGames}
                />
            </section>
        );
    }
}

export default UserData;