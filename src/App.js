import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from './components/Button/Button';
import FruitPicker from "./components/FruitPicker/FruitPicker";

import './App.css';


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
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched",
        defaultValues: {
            'time-frame': 'day'
        }
    });

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
                color="#C8000B"
            />

            <FruitPicker
                fruit="Bananen"
                icon="&#127820;"
                fruitCount={bananas}
                handleCounterMin={() => setBananas(bananas - 1)}
                handleCounterPlus={() => setBananas(bananas + 1)}
                color="#EAA800"
            />

            <FruitPicker
                fruit="Appels"
                icon="&#127823;"
                fruitCount={apples}
                handleCounterMin={() => setApples(apples - 1)}
                handleCounterPlus={() => setApples(apples + 1)}
                color="#418304"
            />

            <FruitPicker
                fruit="Kersen"
                icon="&#127826;"
                fruitCount={cherries}
                handleCounterMin={() => setCherries(cherries - 1)}
                handleCounterPlus={() => setCherries(cherries + 1)}
                color="#F10014"
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
                        {...register("firstname", {
                            minLength: {
                                value: 2,
                                message: "Voer minimaal 2 tekens in"
                            }
                        })}
                    />
                </label>
                {errors.firstname && <p className="error-message">{errors.firstname.message}</p>}

                <label htmlFor="lastname-input">
                    Achternaam: &nbsp;
                    <input
                        type="text"
                        id="lastname-input"
                        {...register("lastname", {
                            minLength: {
                                value: 2,
                                message: "Voer minimaal 2 tekens in"
                            }
                        })}
                    />
                </label>
                {errors.lastname && <p className="error-message">{errors.lastname.message}</p>}

                <label htmlFor="age-input">
                    Leeftijd: &nbsp;
                    <input
                        type="number"
                        id="age-input"
                        {...register("age", {
                            min: {
                                value: 18,
                                message: "U moet 18 jaar zijn om een bestelling te kunnen plaatsen"
                            }
                        })}
                    />
                </label>
                {errors.age && <p className="error-message">{errors.age.message}</p>}

                <label htmlFor="zipcode-input">
                    Postcode: &nbsp;
                    <input
                        type="text"
                        id="zipcode-input"
                        {...register("zipcode", {
                            pattern: {
                                value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                                message: "Voer een geldige postcode in"
                            }
                        })}
                    />
                </label>
                {errors.zipcode && <p className="error-message">{errors.zipcode.message}</p>}

                <label htmlFor="delivery-input">
                    Bezorgfrequentie: &nbsp;

                    <select id="delivery-input" {...register("delivery")}>
                        <option value="daily">Dagelijks</option>
                        <option value="weekly">Wekelijks</option>
                        <option value="monthly">Maandelijks</option>
                    </select>
                </label>

                <label htmlFor="day">
                    <input
                        type="radio"
                        id="day"
                        value="day"
                        {...register("time-frame")}
                    />
                    Overdag
                </label>

                <label htmlFor="night">
                    <input
                        type="radio"
                        id="night"
                        value="night"
                        {...register("time-frame")}
                    />
                    's Avonds
                </label>

                <label htmlFor="comments">
                    Opmerkingen: &nbsp;
                </label>
                <textarea
                    id="comments"
                    cols="30"
                    rows="5"
                    {...register("comments")}
                />

                <label htmlFor="terms-and-conditions" className="terms-label">
                    <input
                        type="checkbox"
                        id="terms-and-conditions"
                        {...register("terms-and-conditions", {
                            required: {
                                value: true,
                                message: "U moet akkoord gaan met de algemene voorwaarden"
                            }
                        })}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                {errors['terms-and-conditions'] && <p className="error-message">{errors['terms-and-conditions'].message}</p>}

                <Button
                    type="submit"
                >
                    Verzend
                </Button>

            </fieldset>
        </form>
    </main>
  );
}

export default App;
