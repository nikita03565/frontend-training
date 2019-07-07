import Vue from 'vue';
import Vuex from 'vuex';
import event from './modules/event'
import signin from './modules/signin'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        signin,
        event
    }
})