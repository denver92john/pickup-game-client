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

export function Textarea({className, ...props}) {
    return (
        <textarea className={['textarea', className].join(' ')} {...props} />
    );
}

export function Label({className, ...props}) {
    return (
        <label className={['label', className].join(' ')} {...props} />
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

export function Required({className, ...props}) {
    return (
        <span className={['Required', className].join(' ')} {...props}>
            &#42;
        </span>
    );
}