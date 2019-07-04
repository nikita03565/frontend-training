import axios from 'axios';

const apiBaseUrl = 'http://127.0.0.1:5000/api';

export default class EventService{
    getAll(){
        return axios.get(`${apiBaseUrl}/events`); //promise
    }

}