import axios from 'axios';
import { baseUrl } from './config';

const url = `${baseUrl}/users`;

const post = async (body) => {
    try {
        const res = await axios.post(url, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const login = async (body) => {
    try {
        const res = await axios.post(`${url}/login`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const findById = async id => {
    try {
        const res = await axios.get(`${url}/${id}`);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const confirmPassword = async (id, password) => {
    const res = await axios.post(`${url}/confirm-password/${id}`, { password });

    return res;
}

const users = {
    post,
    login,
    byId: findById,
    confirmPassword
}

export default users;