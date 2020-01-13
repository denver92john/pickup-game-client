import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import EventsItem from '../components/EventsItem/EventsItem';

describe(`EventsItem component`, () => {
    const eventProp = {
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
    }

    it(`renders without errors`, () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <EventsItem event={eventProp} />
            </BrowserRouter>,
            div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(`renders UI as expected`, () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <EventsItem event={eventProp} />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})