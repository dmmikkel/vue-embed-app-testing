export default {
  namespaced: true,

  state: {
    someText: 'default text',
  },

  mutations: {
    setSomeText(state, newText) {
      state.someText = newText;
    },
  },
};