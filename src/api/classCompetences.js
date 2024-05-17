import axios from 'axios';
import { baseUrl } from './config';

const url = `${baseUrl}/class-competences`;

const post = async body => {
    try {
        const res = await axios.post(`${url}/list`, body);

        return res;
    } catch (e) {
        return e.response.data.message;
    }
}

const classCompetences = {
    post
}

export default classCompetences;