import { React, useState } from "react";
import Input from "../../../components/input/Input";
import competencias from '../../../api/competence';

export default function Register() {
    sessionStorage.setItem('userId', '664613ab47aef80aa00f6dbd');

    const [formData, setFormData] = useState({
        name: 'JavaScript',
        createdBy: sessionStorage.getItem('userId')
    });

    const onInputForm = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const sendForm = async () => {
        const postResponse = await competencias.post(formData);

        console.log(postResponse);
    }

    return <>
        <Input.Default name={'name'} onInput={onInputForm} placeholder={'Competência'} value={formData.name} />
        <button onClick={sendForm}>Sugerir competência</button>
    </>
}