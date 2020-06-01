import React from 'react';
import {CounterType} from "./types";
import Button from "./Button";

function Counter(props: CounterType) {
    let incDisabled = props.currentValue === props.maxValue;
    let resetDisabled = props.currentValue === props.startValue;
    let increment = () => props.setCurrentValue(props.currentValue + 1);
    let resetValue = () => props.setCurrentValue(props.startValue);
    let setCounter = () => props.setCounter(false);
    let displayValueStyle = props.currentValue === props.maxValue ? "lastValue" : "value";

    return (
        <div className={"container"}>
            <div className={"display"}>
                <span className={displayValueStyle}>{props.currentValue}</span>
            </div>
            <div className={"buttons-container"}>
                <div className={"counter-buttons"}>
                    <Button name={"INC"} disabled={incDisabled} onClickFn={increment}/>
                    <Button name={"RESET"} disabled={resetDisabled} onClickFn={resetValue}/>
                </div>
                <div className={"settings-button"}>
                    <Button name={"SETTINGS"} disabled={false} onClickFn={setCounter}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;
