import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from './components/Button/Button';

import './App.css';
import FruitPicker from "./components/FruitPicker/FruitPicker";

function App() {
    //State
    const [ strawberries, setStrawberries ] = useState(0);
    const [ bananas, setBananas ] = useState(0);
    const [ apples, setApples ] = useState(0);
    const [ cherries, setCherries ] = useState(0);

    //Reset State
    const resetValues = () => {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setCherries(0);
    }

    //useForm Hook
    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        console.log('Aardbeien: ' + strawberries);
        console.log('Bananen: ' + bananas);
        console.log('Appels: ' + apples);
        console.log('Kersen: ' + cherries);
    }

  return (
    <main className="main">
        <div className="fruit-pickers">
            <FruitPicker
                fruit="Aardbeien"
                icon="&#127827;"
                fruitCount={strawberries}
                handleCounterMin={() => setStrawberries(strawberries - 1)}
                handleCounterPlus={() => setStrawberries(strawberries + 1)}
            />

            <FruitPicker
                fruit="Bananen"
                icon="&#127820;"
                fruitCount={bananas}
                handleCounterMin={() => setBananas(bananas - 1)}
                handleCounterPlus={() => setBananas(bananas + 1)}
            />

            <FruitPicker
                fruit="Appels"
                icon="&#127823;"
                fruitCount={apples}
                handleCounterMin={() => setApples(apples - 1)}
                handleCounterPlus={() => setApples(apples + 1)}
            />

            <FruitPicker
                fruit="Kersen"
                icon="&#127826;"
                fruitCount={cherries}
                handleCounterMin={() => setCherries(cherries - 1)}
                handleCounterPlus={() => setCherries(cherries + 1)}
            />

            <Button
                type="button"
                clickHandler={resetValues}
            >
                Reset
            </Button>
        </div>


        <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="firstname-input">
                    Voornaam: &nbsp;
                    <input
                        type="text"
                        id="firstname-input"
                        {...register("firstname")}
                    />
                </label>

                <label htmlFor="lastname-input">
                    Achternaam: &nbsp;
                    <input
                        type="text"
                        id="lastname-input"
                        {...register("lastname")}
                    />
                </label>

                <label htmlFor="age-input">
                    Leeftijd: &nbsp;
                    <input
                        type="number"
                        id="age-input"
                        {...register("age")}
                    />
                </label>

                <label htmlFor="zipcode-input">
                    Postcode: &nbsp;
                    <input
                        type="text"
                        id="zipcode-input"
                        {...register("zipcode")}
                    />
                </label>

                <label htmlFor="delivery-input">
                    Bezorgfrequentie: &nbsp;

                    <select id="delivery-input" {...register("delivery")}>
                        <option value="daily">Dagelijks</option>
                        <option value="weekly">Wekelijks</option>
                        <option value="monthly">Maandelijks</option>
                    </select>
                </label>

                <label htmlFor="day" className="radio-button">
                    <input
                        type="radio"
                        id="day"
                        {...register("day")}
                    />
                    Overdag
                </label>

                <label htmlFor="night" className="radio-button">
                    <input
                        type="radio"
                        id="night"
                        {...register("night")}
                    />
                    's Avonds
                </label>

                <label htmlFor="comments">
                    Opmerkingen: &nbsp;
                </label>
                <textarea id="comments" cols="30" rows="5" />

                <label htmlFor="terms-and-conditions" className="terms-label">
                    <input
                        type="checkbox"
                        id="terms-and-conditions"
                    />
                    Ik ga akkoord met de voorwaarden
                </label>

                <button
                    className="submit-btn"
                    type="submit"

                >
                    Verzend
                </button>

            </fieldset>
        </form>
    </main>
  );
}

export default App;
