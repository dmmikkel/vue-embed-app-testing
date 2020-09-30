import Vue from 'vue'
import Vuex from 'vuex'
import leaseTermination from 'lease-termination';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    leaseTermination: leaseTermination.stateModule,
  }
})
