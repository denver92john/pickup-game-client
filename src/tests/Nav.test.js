import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav/Nav';

describe(`Nav component`, () => {
    it('renders without errors', () => {
        const nav = document.createElement('nav');
        ReactDOM.render(
            <BrowserRouter>
                <Nav />
            </BrowserRouter>,
            nav);
        ReactDOM.unmountComponentAtNode(nav);
    });

    it(`renders UI as expected`, () => {
        const tree = renderer
            .create(<BrowserRouter>
                <Nav />
            </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})