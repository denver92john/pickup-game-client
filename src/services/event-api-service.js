import TokenService from '../services/token-service';
import config from '../config';

const EventApiService = {
    getEvents() {
        return fetch(`${config.API_ENDPOINT}/event`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getSportsList() {
        return fetch(`${config.API_ENDPOINT}/event/sport_list`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getEvent(event_id) {
        return fetch(`${config.API_ENDPOINT}/event/${event_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getPlayers(event_id) {
        return fetch(`${config.API_ENDPOINT}/event/${event_id}/players`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getFilteredEvents(queryString) {
        return fetch(`${config.API_ENDPOINT}/event/${queryString}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postEvent(newEvent) {
        return fetch(`${config.API_ENDPOINT}/event`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newEvent),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            )
    },
    play(newPlay, event_id) {
        return fetch(`${config.API_ENDPOINT}/play/${event_id}`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(newPlay),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            )
    },
    deletePlay(event_id) {
        return fetch(`${config.API_ENDPOINT}/play/${event_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                //console.log(res)
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
            )
    }
}

export default EventApiService;