import TokenService from '../services/token-service';
import config from '../config';

const UserApiService = {
    getUserEvents(user_id) {
        return fetch(`${config.API_ENDPOINT}/play/user/${user_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUserHostedEvents(user_id) {
        return fetch(`${config.API_ENDPOINT}/play/host/${user_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default UserApiService;