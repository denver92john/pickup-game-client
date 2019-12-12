import React, {Component} from 'react';
import UserContext from '../../contexts/UserContext';
import UserApiService from '../../services/user-api-service';
import Tabs from '../Tabs/Tabs';
import Events from '../Events/Events';
import './UserData.css';

class UserData extends Component {
    static contextType = UserContext;

    handleUserGames = ev => {
        ev.preventDefault()
        this.context.clearError()
        this.context.clearEvents()
        const user_id = this.props.user.id;
        //console.log(user_id)
        UserApiService.getUserEvents(user_id)
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    handleHostedGames = ev => {
        ev.preventDefault()
        this.context.clearError()
        this.context.clearEvents()
        const user_id = this.props.user.id;
        UserApiService.getUserHostedEvents(user_id)
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    render() {
        //console.log('ran second')
        //console.log(this.context.user.id)
        return (
            <section>
                <Tabs />
                <Events events={this.context.events}/>
                <button type="button" onClick={this.handleUserGames}>User Games</button>
                <button type="button" onClick={this.handleHostedGames}>Hosted Games</button>
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