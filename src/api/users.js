import axios from 'axios';
import { baseUrl } from './config';

const path = "users";

const post = async (body) => {
    try {
        const res = await axios.post(`${baseUrl}/${path}`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const login = async (body) => {
    try {
        const res = await axios.post(`${baseUrl}/${path}/login`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const users = {
    post,
    login
}

export default users;