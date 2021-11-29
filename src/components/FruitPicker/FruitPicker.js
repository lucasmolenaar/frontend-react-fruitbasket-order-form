import React from 'react';
import './FruitPicker.css';
import Counter from "../Counter/Counter";

const FruitPicker = ({ fruit, icon, fruitCount, handleCounterMin, handleCounterPlus, color }) => {
    return (
        <div
            className="fruit-box"
            style={fruitCount > 0 ? {border: `2px solid ${color}`} : {border: '2px solid black'}}
        >
            <span className="fruit-icon">{icon}</span>
            <h4>{fruit}</h4>
            <Counter
                isDisabled={fruitCount <= 0}
                count={fruitCount}
                clickHandlerMin={handleCounterMin}
                clickHandlerPlus={handleCounterPlus}
                color={color}
            />
        </div>
    );
}

export default FruitPicker;