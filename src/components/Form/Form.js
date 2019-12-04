import React from 'react';
import './Form.css';

function Form(props) {
    const {className, ...otherProps} = props;
    return (
        <form
            className={["pickup-game-form", className].join(" ")}
            {...otherProps}
        />
    );
}

export default Form;