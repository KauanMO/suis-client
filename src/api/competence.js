import axios from 'axios';
import { baseUrl } from './config';

const url = `${baseUrl}/competences`;

const post = async (body) => {
    try {
        const res = await axios.post(`${url}`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const confirm = async (id) => {
    try {
        const res = await axios.patch(`${url}/confirm/${id}`);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const notConfirmed = async () => {
    try {
        const res = await axios.get(`${url}/not-confirmed`);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const competences = {
    post,
    confirm,
    notConfirmed
}

export default competences;