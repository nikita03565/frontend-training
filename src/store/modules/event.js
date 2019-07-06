import axios from 'axios';

export default {
    actions: {
        async fetchAllEvents(ctx) {
            const res = await axios.get(`http://127.0.0.1:5000/api/events`); //promise
            const events = await res.data;

            ctx.commit('updateEvents', events);
        }
    },
    mutations: {
        updateEvents(state, events) {
            state.events = events;
        }
    },
    state: {
        events: []
    },
    getters: {
        getAllEvents(state) {
            return state.events;
        }
    }
};
