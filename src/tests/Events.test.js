import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Events from '../components/Events/Events';

describe(`Events component`, () => {
    const eventsProp = [
        {
            datetime: '2019-11-15T16:20:55.000Z',
            description: 'Thanksgiving football game',
            host: {
                first_name: 'John',
                id: 1,
                last_name: 'Denver',
                username: 'JDenver'
            },
            id: 1,
            max_players: 10,
            number_of_players: 2,
            player_id: '',
            sport: 'football',
            title: 'Turkey Bowl'
        },
        {
            datetime: '2019-11-15T16:20:55.000Z',
            description: 'Hockey game for who can make it',
            host: {
                first_name: 'John',
                id: 1,
                last_name: 'Denver',
                username: 'JDenver'
            },
            id: 2,
            max_players: 6,
            number_of_players: '2',
            player_id: '',
            sport: 'hockey',
            title: 'Championship Hockey Game'
        },
    ];

    it(`renders without errors`, () => {
        const ul = document.createElement('ul');
        ReactDOM.render(
            <BrowserRouter>
                <Events events={eventsProp} />
            </BrowserRouter>, 
            ul);
        ReactDOM.unmountComponentAtNode(ul);
    });

    it(`renders UI as expected`, () => {
        const tree = renderer
            .create(<BrowserRouter>
                <Events events={eventsProp} />
            </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})