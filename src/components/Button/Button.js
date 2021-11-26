import React from 'react';
import './Button.css';

const Button = ({ type, clickHandler, isDisabled, children }) => {
    return (
        <button
            className="btn"
            type={type}
            onClick={clickHandler}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

export default Button;