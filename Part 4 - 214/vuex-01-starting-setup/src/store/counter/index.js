import counterMutations from './mutations';
import counterActions from './actions';

export default {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) { // _ is used so ESLint can ignore unused variable "state"
      const finalCounter = getters.finalCounter; //state.counter * 2 instead of doing it this way we use getters
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  }
}