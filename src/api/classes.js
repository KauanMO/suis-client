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

const getById = async id => {
    try {
        const res = await axios.get(`${url}/${id}`);

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

const confirm = async id => {
    try {
        const res = await axios.patch(`${url}/confirm-class/${id}`);

        return res
    } catch (e) {
        return e.response.data.message;
    }
}

const confirmTutor = async id => {
    try {
        const res = await axios.patch(`${url}/confirm-tutor/${id}`);

        return res
    } catch (e) {
        return e.response.data.message;
    }
}

const classes = {
    post,
    byConfirmed,
    confirm,
    confirmTutor,
    byId: getById
}

export default classes;