import React, {Component} from 'react';
import Tabs from '../Tabs/Tabs';
import Events from '../Events/Events';
import './UserData.css';

class UserData extends Component {
    handleUserGames = (games = []) => {
        let userGames;
        const {user_id} = this.props.user.id;
        userGames = games.filter(game => {
            
        })
    }

    handleHostedGames = (games = []) => {

    }

    render() {
        return (
            <section>
                <Tabs />
                <Events />
            </section>
        );
    }
}

export default UserData;

/*
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
*/