import React from "react";

export function Input({ name, onInput, placeholder }) {
    return <input placeholder={placeholder} name={name} onInput={onInput}></input>
}