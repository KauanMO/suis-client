import { React, useState } from "react";
import { Input } from "../../components/input/Input";
import users from '../../api/users';
import {useNavigate} from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: 'kauan',
        email: 'kauaanmatheus@gmail.com',
        password: 'Kauan132'
    });

    const onInputFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendForm = async () => {
        const postResponse = await users.post(formData);

        if (postResponse.status === 201) {
            sessionStorage.setItem('userId', postResponse.data._id);
            sessionStorage.setItem('username', postResponse.data.username);

            navigate('/home');
        }
    }

    return <>
        <Input value={formData.username} placeholder={'username'} name={'username'} onInput={onInputFormData} />
        <Input value={formData.password} placeholder={'password'} name={'password'} onInput={onInputFormData} />
        <Input value={formData.email} placeholder={'email'} name={'email'} onInput={onInputFormData} />
        <button onClick={sendForm}>Cadastrar</button>
    </>
}