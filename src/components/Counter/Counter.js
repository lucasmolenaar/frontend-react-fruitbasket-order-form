import React from 'react';
import './Counter.css';

const Counter = ({ isDisabled, count, clickHandlerMin, clickHandlerPlus, color }) => {
    return (
        <div className="Counter">
            <button
                type="button"
                onClick={clickHandlerMin}
                disabled={isDisabled}
            >
                -
            </button>

            <p style={count > 0 ? {color: color} : {color: 'black'}}>{count}</p>

            <button
                type="button"
                onClick={clickHandlerPlus}
            >
                +
            </button>
        </div>
    );
}

export default Counter;