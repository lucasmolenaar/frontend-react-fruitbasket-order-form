import React from 'react';
import './Counter.css';

const Counter = ({ isDisabled, count, clickHandlerMin, clickHandlerPlus }) => {
    return (
        <div className="Counter">
            <button
                type="button"
                onClick={clickHandlerMin}
                disabled={isDisabled}
            >
                -
            </button>

            <p>{count}</p>

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