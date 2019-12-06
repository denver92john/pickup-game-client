import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {EventsProvider} from './contexts/EventsContext';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <EventsProvider>
            <App />
        </EventsProvider>
    </BrowserRouter>, 
    document.getElementById('root')
);