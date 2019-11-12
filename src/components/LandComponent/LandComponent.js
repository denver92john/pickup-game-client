import React from 'react';
import './LandComponent.css';

function LandComponent(props) {
    return (
        <section>
            {props.children}
        </section>
    );
}

export default LandComponent;