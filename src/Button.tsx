import React from "react";
import {ButtonType} from "./types"

function Button(props: ButtonType) {
    return (
        <button disabled={props.disabled} onClick={props.onClickFn}>{props.name}</button>
    )
}

export default Button;
