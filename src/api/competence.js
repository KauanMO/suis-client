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

const byConfirmed = async confirmed => {
    try {
        const res = await axios.get(`${url}/by-confirmed?confirmed=${confirmed}`);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const competences = {
    post,
    confirm,
    byConfirmed
}

export default competences;