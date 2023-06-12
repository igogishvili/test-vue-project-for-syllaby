import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      searchQuery: '',
    };
  },
  mutations: {
    updateValue(state, newValue) {
      state.searchQuery = newValue;
    },
  },
});

export default store;
