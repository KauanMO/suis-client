import axios from 'axios';
import { baseUrl } from './config';

const url = `${baseUrl}/classes`;

const post = async body => {
    try {
        const res = await axios.post(`${url}`, body);

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

const classes = {
    post,
    byConfirmed
}

export default classes;