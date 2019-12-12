import React from 'react';
import './Utils.css';

export function Button({className, ...props}) {
    return <button className={['button', className].join(' ')} {...props} />
}

export function Input({className, ...props}) {
    return (
        <input className={['input', className].join(' ')} {...props} />
    );
}

export function Hero({className, ...props}) {
    const classes = [
        'hero',
        className
    ].join(' ')
    return (
        <header className={classes} {...props} />
    );
}

export function Section({className, ...props}) {
    const classes = [
        'section',
        className
    ].join(' ')
    return (
        <section className={classes} {...props} />
    );
}