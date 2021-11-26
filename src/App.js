import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {

    const [ strawberries, setStrawberries ] = useState(0);
    const [ bananas, setBananas ] = useState(0);
    const [ apples, setApples ] = useState(0);
    const [ cherries, setCherries ] = useState(0);

    const resetValues = () => {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setCherries(0);
    }

    const { register, handleSubmit } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        console.log('Aarbeien: ' + strawberries);
        console.log('Bananen: ' + bananas);
        console.log('Appels: ' + apples);
        console.log('Kersen: ' + cherries);
    }

  return (
    <main className="main">
        <div className="fruit-pickers">
            <div className="fruit-box">
                &#127827;
                <h4>Aardbeien</h4>
                <button
                    type="button"
                    onClick={() => setStrawberries(strawberries - 1)}
                    disabled={strawberries <= 0}
                >
                    -
                </button>
                <p>{strawberries}</p>
                <button
                    type="button"
                    onClick={() => setStrawberries(strawberries + 1)}
                >
                    +
                </button>
            </div>

            <div className="fruit-box">
                &#127820;
                <h4>Bananen</h4>
                <button
                    type="button"
                    onClick={() => setBananas(bananas - 1)}
                    disabled={bananas <= 0}
                >
                    -
                </button>
                <p>{bananas}</p>
                <button
                    type="button"
                    onClick={() => setBananas(bananas + 1)}
                >
                    +
                </button>
            </div>

            <div className="fruit-box">
                &#127823;
                <h4>Appels</h4>
                <button
                    type="button"
                    onClick={() => setApples(apples - 1)}
                    disabled={apples <= 0}
                >
                    -
                </button>
                <p>{apples}</p>
                <button
                    type="button"
                    onClick={() => setApples(apples + 1)}
                >
                    +
                </button>
            </div>

            <div className="fruit-box">
                &#127826;
                <h4>Kersen</h4>
                <button
                    type="button"
                    onClick={() => setCherries(cherries - 1)}
                    disabled={cherries <= 0}
                >
                    -
                </button>
                <p>{cherries}</p>
                <button
                    type="button"
                    onClick={() => setCherries(cherries + 1)}
                >
                    +
                </button>
            </div>

            <button
                className="reset-btn"
                type="button"
                onClick={resetValues}
            >
                Reset
            </button>
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
