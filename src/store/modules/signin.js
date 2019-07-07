import axios from 'axios';
import { AlertPlugin } from 'bootstrap-vue';

export default {
    state: {
        status: '',
        access_token: localStorage.getItem('access_token') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading';
        },
        auth_success(state, access_token, user) {
            state.status = 'success';
            state.access_token = access_token;
            state.user = user;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.access_token = '';
        }
    },
    actions: {
        signin({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({
                    url: 'http://0.0.0.0:5000/api/signin',
                    data: user,
                    method: 'POST'
                })
                    .then(resp => {
                        console.log(resp);

                        const access_token = resp.data.access_token;
                        const user = resp.data.user;
                        localStorage.setItem('access_token', access_token);
                        axios.defaults.headers.common['Authorization'] =
                            'Bearer ' + access_token;
                        commit('auth_success', access_token, user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error');
                        localStorage.removeItem('access_token');
                        reject(err);
                    });
            });
        },
        signup({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                axios({
                    url: 'http://0.0.0.0:5000/api/signup',
                    data: user,
                    method: 'POST'
                })
                    .then(resp => {
                        console.log(resp);
                        const access_token = resp.data.access_token;
                        const user = resp.data.user;
                        localStorage.setItem('access_token', access_token);
                        axios.defaults.headers.common[
                            'Authorization'
                        ] = access_token;
                        commit('auth_success', access_token, user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit('auth_error', err);
                        localStorage.removeItem('access_token');
                        reject(err);
                    });
            });
        }
    },
    getters: {
        isSignedIn: state => !!state.access_token,
        authStatus: state => state.status
    }
};
