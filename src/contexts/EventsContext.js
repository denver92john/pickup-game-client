import React from 'react';

const EventsContext = React.createContext({
    events: [],
    addEvent: () => {},
});

export default EventsContext;