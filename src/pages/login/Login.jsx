import { React, useState } from "react";
import Input from '../../components/input/Input';
import users from '../../api/users';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login: 'kauaanmatheus@gmail.com',
        password: 'Kauan132'
    });

    const onInputFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const sendForm = async () => {
        const postResponse = await users.login(formData);

        if (postResponse.status === 200) {
            sessionStorage.setItem('userId', postResponse.data._id);
            sessionStorage.setItem('username', postResponse.data.username);

            navigate('/home');
        }
    }

    return <>
        <Input.Default value={formData.login} placeholder={'login'} name={'login'} onInput={onInputFormData} />
        <Input.Default value={formData.password} placeholder={'password'} name={'password'} onInput={onInputFormData} />
        <button onClick={sendForm}>Entrar</button>
    </>
}