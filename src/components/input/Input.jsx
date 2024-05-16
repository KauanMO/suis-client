import React from "react";

export function Input({ value, name, onInput, placeholder }) {
    return <input value={value} placeholder={placeholder} name={name} onInput={onInput}></input>
}