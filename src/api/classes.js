import axios from 'axios';
import { baseUrl } from './config';

const path = "classes";

const post = async body => {
    try {
        const res = await axios.post(`${baseUrl}/${path}`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const classes = {
    post
}

export default classes;