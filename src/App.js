import React, { useState } from 'react';
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

    </main>
  );
}

export default App;
