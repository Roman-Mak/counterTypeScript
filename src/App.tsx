import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import Settings from "./Settings";

function App() {
    let [maxValue, setMaxValue] = useState<number>(5);
    let [startValue, setStartValue] = useState<number>(0);
    let [currentValue, setCurrentValue] = useState<number>(startValue);
    let [isCounterOn, setCounter] = useState<boolean>(true);

    return (
        <div className="App">
            {
                isCounterOn
                    ? <Counter maxValue={maxValue}
                               currentValue={currentValue}
                               startValue={startValue}
                               setCounter={setCounter}
                               setCurrentValue={setCurrentValue}
                    />
                    : <Settings maxValue={maxValue}
                                startValue={startValue}
                                setCounter={setCounter}
                                setMaxValue={setMaxValue}
                                setStartValue={setStartValue}
                                setCurrentValue={setCurrentValue}/>
            }
        </div>
    );
}

export default App;
