import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const INITIAL_STATE = {
    loggedIn: false,
    loggedInUser: {}
};

export default new Vuex.Store({
    INITIAL_STATE
});
