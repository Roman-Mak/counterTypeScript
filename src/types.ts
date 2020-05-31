export type CounterType = {
    maxValue: number,
    currentValue: number,
    startValue: number,
    setCounter: (isCounterOn: boolean) => void,
    setCurrentValue: (nextValue: number) => void,
}

export type SettingsType = {
    maxValue: number,
    startValue: number,
    setCounter: (isCounterOn: boolean) => void,
    setMaxValue: (value: number) => void,
    setStartValue: (value: number) => void,
    setCurrentValue: (value: number) => void
}

export type ButtonType = {
    name: string,
    disabled: boolean,
    onClickFn: () => void
}
