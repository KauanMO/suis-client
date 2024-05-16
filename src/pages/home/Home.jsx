import React from "react";
import { Title1 } from "../../components/text/Text";

export default function Home() {
    return <>
        <Title1>Olá, {sessionStorage.getItem('username')}!</Title1>
    </>
};