import React from "react";
import Text from "../../components/text/Text";

export default function Home() {
    return <>
        <Text.Title1>Olá, {sessionStorage.getItem('username')}!</Text.Title1>
    </>
};