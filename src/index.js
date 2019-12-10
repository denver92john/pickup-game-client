import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {EventsProvider} from './contexts/EventsContext';
import {EventProvider} from './contexts/EventContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <EventsProvider>
            <EventProvider>
                <App />
            </EventProvider>
        </EventsProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);