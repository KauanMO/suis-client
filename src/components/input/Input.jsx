import React from "react";
import Text from '../text/Text';

function Default({ value, name, onInput, placeholder }) {
    return <input value={value} placeholder={placeholder} name={name} onInput={onInput}></input>
}

function Checkbox({ text, id, checked, onChange }) {
    return <>
        <input onChange={onChange} type="checkbox" checked={checked} id={id}></input>
        <Text.Span2>{text}</Text.Span2>
    </>
}

const input = {
    Default,
    Checkbox
}

export default input;