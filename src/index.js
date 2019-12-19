import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './contexts/UserContext';
import {EventsProvider} from './contexts/EventsContext';
import {EventProvider} from './contexts/EventContext';
import App from './components/App/App';
//import './fonts/'
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <EventsProvider>
                <EventProvider>
                    <App />
                </EventProvider>
            </EventsProvider>
        </UserProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);