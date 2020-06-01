import React from 'react';
import {SettingsType} from "./types";
import Button from "./Button";

function Settings(props: SettingsType) {
    let setMaxValue = (e: any) => {
        props.setMaxValue(Number(e.currentTarget.value));
    };
    let setStartValue = (e: any) => {
        props.setStartValue(Number(e.currentTarget.value));
    };
    let setCounter = () => {
        props.setCounter(true);
        props.setCurrentValue(props.startValue);
    };
    let applyDisabled = props.startValue < 0 || props.startValue >= props.maxValue;
    let spanText = "Enter values";
    let spanStyle = "settingsTextStyle";
    let inputStyle = "settingsInputStyle";
    if (applyDisabled) {
        spanText = "Incorrect value!";
        spanStyle = "wrongValue";
        inputStyle = "errorInputStyle";
    }

    return (
        <div className={"container"}>
            <div className={"display"}>
                <label>MAX VALUE:
                    <input type={"number"}
                           className={inputStyle}
                           value={props.maxValue}
                           onChange={setMaxValue}/>
                </label>
                <label>START VALUE:
                    <input type={"number"}
                           className={inputStyle}
                           value={props.startValue}
                           onChange={setStartValue}/>
                </label>
            </div>
            <div className={"settings"}>
                <span className={spanStyle}>{spanText}</span>
                <Button name={"APPLY"} disabled={applyDisabled} onClickFn={setCounter}/>
            </div>
        </div>
    );
}

export default Settings;
