import React from 'react';
import './Form.css';

function Form({className, ...props}) {
    const classes = [
        "pickup-game-form",
        className
    ].join(' ')
    return (
        <form className={classes} {...props}/>
    );
}

export default Form;