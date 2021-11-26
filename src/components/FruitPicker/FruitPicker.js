import React from 'react';
import './FruitPicker.css';
import Counter from "../Counter/Counter";

const FruitPicker = ({ fruit, icon, fruitCount, handleCounterMin, handleCounterPlus }) => {
    return (
        <div className="fruit-box">
            <span className="fruit-icon">{icon}</span>
            <h4>{fruit}</h4>
            <Counter
                isDisabled={fruitCount <= 0}
                count={fruitCount}
                clickHandlerMin={handleCounterMin}
                clickHandlerPlus={handleCounterPlus}
            />
        </div>
    );
}

export default FruitPicker;