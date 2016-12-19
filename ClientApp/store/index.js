import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const states = {
  loggedIn : false,
  loggedInUser : {}
};

export default new Vuex.Store({
  states
});
