import { React, useState } from "react";
import { Input } from "../../components/input/Input";
import users from '../../api/users';

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const onInputFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendForm = async () => {
        const postResponse = await users.post(formData);
    }

    return <>
        <Input placeholder={'username'} name={'username'} onInput={onInputFormData} />
        <Input placeholder={'password'} name={'password'} onInput={onInputFormData} />
        <Input placeholder={'email'} name={'email'} onInput={onInputFormData} />
        <button onClick={sendForm}>Cadastrar</button>
    </>
}